import React, { useRef, useEffect, useState } from 'react';
import { useMotionValue } from 'framer-motion';
import TWEEN from '@tweenjs/tween.js';

import { useElementSize } from 'hooks/useElementSize';
import { useWindowSize } from 'hooks/useWindowSize';
import { SlideItem } from 'components/InfiniteSlider/components/SlideItem/SlideItem';
import { calculateSize } from 'utils/functions/calculateSize';
import { sharedValues } from 'utils/sharedValues';
import { UpdateInfo } from 'utils/sharedTypes';
import { lerp } from 'utils/functions/lerp';

import * as S from './InfiniteSlider.styles';
import { renderBreakpoints, itemSizeSSR } from './InfiniteSlider.settings';
import { useApplyScroll } from './hooks/useApplyScroll';
// import { useSeekTo } from './hooks/useSeekTo';
import { useTouchEvents } from './hooks/useTouchEvents';
import { useMouseWheelEvents } from './hooks/useMouseWheelEvents';
import { useOnResize } from './hooks/useOnResize';
import { useProgress } from './hooks/useProgress';

interface Props {
  itemsToRender: React.ReactElement[];
}

export const InfiniteSlider = (props: Props) => {
  const { itemsToRender } = props;
  const wrapperRef = useRef(null);
  const wrapperSize = useElementSize(wrapperRef);
  const { windowSize } = useWindowSize();
  const [itemSize, setItemSize] = useState(itemSizeSSR);

  const offsetX = useMotionValue(0);
  const offsetXLerp = useMotionValue(0);
  const progressRatio = useMotionValue(0);
  const lastTouchX = useRef<number>(0);
  const useMomentum = useRef<boolean>(false);
  const touchMomentum = useRef<number>(0);
  const TWEEN_GROUP_SEEK = useRef(new TWEEN.Group());

  const rafId = useRef<number | null>(null);
  const lastFrameTime = useRef<number | null>(null);
  const isResumed = useRef(true);

  useEffect(() => {
    const wrapperWidth = wrapperSize.size.clientRect.width;
    let size = itemSizeSSR;
    renderBreakpoints.forEach(el => {
      if (windowSize.windowWidth >= el.minWindowWidth) {
        size = calculateSize({
          wrapperWidth,
          maxItems: el.itemsRendered,
          padding: el.padding,
          isPaddingRelative: el.isPaddingRelative,
        });
      }
    });
    setItemSize(size);
  }, [windowSize.windowWidth, wrapperSize.size.clientRect.width]);

  // Hooks
  const { getProgressValues } = useProgress({
    contentWidth: (itemSize.elWidth + itemSize.elPadding) * itemsToRender.length,
    offsetX,
    progressRatio,
  });

  const { applyScroll } = useApplyScroll({
    contentWidth: (itemSize.elWidth + itemSize.elPadding) * itemsToRender.length,
    offsetX,
    windowWidth: windowSize.windowWidth,
    progressRatio,
    getProgressValues,
    TWEEN_GROUP_SEEK,
  });

  // const { seekTo } = useSeekTo({
  //   offsetX,
  //   useMomentum,
  //   progressRatio,
  //   windowWidth: windowSize.windowWidth,
  //   contentWidth: (itemSize.elWidth + itemSize.elPadding) * itemsToRender.length,
  //   getProgressValues,
  //   TWEEN_GROUP_SEEK,
  // });

  const { onTouchEnd, onTouchMove, onTouchStart } = useTouchEvents({
    applyScroll,
    useMomentum,
    lastTouchX,
    touchMomentum,
  });

  const { onMouseWheel } = useMouseWheelEvents({ useMomentum, applyScroll });

  const { onResizeDebounced, onResize } = useOnResize({
    useMomentum,
    offsetX,
    TWEEN_GROUP_SEEK,
    getProgressValues,
  });

  useEffect(() => {
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('wheel', onMouseWheel, { passive: true });
    window.addEventListener('resize', onResizeDebounced);
    onResize();

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('wheel', onMouseWheel);
      window.removeEventListener('resize', onResizeDebounced);
    };
  }, [onMouseWheel, onResize, onResizeDebounced, onTouchEnd, onTouchMove, onTouchStart]);

  //Custom render loop
  const stopAppFrame = () => {
    if (rafId.current) window.cancelAnimationFrame(rafId.current);
  };

  const handleMomentum = React.useCallback(
    (updateInfo: UpdateInfo) => {
      touchMomentum.current *= Math.pow(
        sharedValues.motion.MOMENTUM_DAMPING,
        updateInfo.slowDownFactor
      );
      if (!useMomentum.current) return;
      if (touchMomentum.current >= 0.01 || touchMomentum.current <= -0.01) {
        applyScroll({ horizontalAmountPx: touchMomentum.current });
      }
    },
    [applyScroll]
  );

  const handleLerp = React.useCallback(
    (updateInfo: UpdateInfo) => {
      const newOffsetXLerp = lerp(
        offsetXLerp.get(),
        offsetX.get(),
        sharedValues.motion.LERP_EASE * updateInfo.slowDownFactor
      );
      offsetXLerp.set(newOffsetXLerp);
    },
    [offsetX, offsetXLerp]
  );

  const renderOnFrame = React.useCallback(
    (time: number) => {
      rafId.current = window.requestAnimationFrame(renderOnFrame);

      if (isResumed.current || !lastFrameTime.current) {
        lastFrameTime.current = window.performance.now();
        isResumed.current = false;
        return;
      }

      TWEEN.update(time);
      TWEEN_GROUP_SEEK.current.update(time);

      const delta = time - lastFrameTime.current;
      let slowDownFactor = delta / sharedValues.motion.DT_FPS;

      //Rounded slowDown factor to the nearest integer reduces physics lags
      const slowDownFactorRounded = Math.round(slowDownFactor);

      if (slowDownFactorRounded >= 1) {
        slowDownFactor = slowDownFactorRounded;
      }
      lastFrameTime.current = time;

      const updateInfo: UpdateInfo = {
        delta,
        slowDownFactor,
        time,
      };

      //Own updates
      handleMomentum(updateInfo);
      handleLerp(updateInfo);
    },
    [handleLerp, handleMomentum]
  );

  const resumeAppFrame = React.useCallback(() => {
    rafId.current = window.requestAnimationFrame(renderOnFrame);
    isResumed.current = true;
  }, [renderOnFrame]);

  const onVisibilityChange = React.useCallback(() => {
    if (document.hidden) return stopAppFrame();
    return resumeAppFrame();
  }, [resumeAppFrame]);

  useEffect(() => {
    resumeAppFrame();
    window.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      stopAppFrame();
      window.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [onVisibilityChange, resumeAppFrame]);

  return (
    <>
      <S.Wrapper ref={wrapperRef}>
        <S.ItemsWrapper>
          {itemsToRender.map(el => (
            <SlideItem
              itemsAmount={itemsToRender.length}
              offsetX={offsetXLerp}
              key={el.key}
              elPadding={itemSize.elPadding}
              elWidth={itemSize.elWidth}
            >
              {el}
            </SlideItem>
          ))}
        </S.ItemsWrapper>
      </S.Wrapper>
    </>
  );
};
