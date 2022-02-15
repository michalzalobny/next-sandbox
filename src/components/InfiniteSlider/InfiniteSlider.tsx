import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';

import { useElementSize } from 'hooks/useElementSize';
import { useWindowSize } from 'hooks/useWindowSize';
import { SlideItem } from 'components/InfiniteSlider/components/SlideItem/SlideItem';
import { calculateSize } from 'utils/functions/calculateSize';
import { sharedValues } from 'utils/sharedValues';
import { UpdateInfo } from 'utils/sharedTypes';
import { lerp } from 'utils/functions/lerp';
import { Scroll } from 'utils/singletons/Scroll';

import * as S from './InfiniteSlider.styles';
import {
  renderBreakpoints,
  itemSizeSSR,
  mouseMultiplier,
  touchMultiplier,
  wheelMultiplier,
} from './InfiniteSlider.settings';

interface Props {
  itemsToRender: React.ReactElement[];
}

export const InfiniteSlider = (props: Props) => {
  const { itemsToRender } = props;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const wrapperSize = useElementSize(wrapperRef);
  const { windowSize } = useWindowSize();
  const [itemSize, setItemSize] = useState(itemSizeSSR);
  const offsetX = useMotionValue(0);
  const offsetXLerp = useMotionValue(0);
  const progressRatio = useMotionValue(0);
  const TWEEN_GROUP_SEEK = useRef(new TWEEN.Group());
  const rafId = useRef<number | null>(null);
  const lastFrameTime = useRef<number | null>(null);
  const isResumed = useRef(true);
  const scroll = useRef(new Scroll());
  const contentWidthRef = useRef(1);

  //Transfer react values to refs
  useEffect(() => {
    contentWidthRef.current = (itemSize.elPadding + itemSize.elWidth) * itemsToRender.length;
  }, [itemSize, itemsToRender.length]);

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

  const applyScroll = (amountPx: number) => {
    const contentWidth = contentWidthRef.current;
    const newOffsetX = offsetX.get() + amountPx;
    offsetX.set(newOffsetX);
    let newProgressRatio;
    if (offsetX.get() < 0) {
      newProgressRatio = 1 - ((offsetX.get() * -1) % contentWidth) / contentWidth;
    } else {
      newProgressRatio = (offsetX.get() % contentWidth) / contentWidth;
    }
    progressRatio.set(newProgressRatio);
  };

  const onScrollMouse = (e: THREE.Event) => {
    applyScroll(e.x * mouseMultiplier * -1);
  };
  const onScrollTouch = (e: THREE.Event) => {
    applyScroll(e.x * touchMultiplier * -1);
  };
  const onScrollWheel = (e: THREE.Event) => {
    applyScroll(e.y * wheelMultiplier * -1);
  };

  //Preserve progress on resize
  useEffect(() => {
    offsetX.set(progressRatio.get() * contentWidthRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemSize]);

  useEffect(() => {
    wrapperRef.current && scroll.current.setTargetElement(wrapperRef.current);
    const scrollObj = scroll.current;

    scrollObj.addEventListener('mouse', onScrollMouse);
    scrollObj.addEventListener('touch', onScrollTouch);
    scrollObj.addEventListener('wheel', onScrollWheel);

    return () => {
      scrollObj.removeEventListener('mouse', onScrollMouse);
      scrollObj.removeEventListener('touch', onScrollTouch);
      scrollObj.removeEventListener('wheel', onScrollWheel);
      scrollObj.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Custom render loop
  const stopAppFrame = () => {
    if (rafId.current) window.cancelAnimationFrame(rafId.current);
  };

  const handleLerp = (updateInfo: UpdateInfo) => {
    if (Math.abs(offsetX.get() - offsetXLerp.get()) < 0.1) return;
    const newOffsetXLerp = lerp(
      offsetXLerp.get(),
      offsetX.get(),
      sharedValues.motion.LERP_EASE * updateInfo.slowDownFactor
    );
    offsetXLerp.set(newOffsetXLerp);
  };

  const renderOnFrame = (time: number) => {
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
    handleLerp(updateInfo);
    scroll.current.update(updateInfo);
  };

  const resumeAppFrame = () => {
    rafId.current = window.requestAnimationFrame(renderOnFrame);
    isResumed.current = true;
  };

  const onVisibilityChange = () => {
    if (document.hidden) return stopAppFrame();
    return resumeAppFrame();
  };

  useEffect(() => {
    resumeAppFrame();
    window.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      stopAppFrame();
      window.removeEventListener('visibilitychange', onVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.Wrapper style={{ position: 'relative' }} ref={wrapperRef}>
        <motion.div
          style={{
            zIndex: 10,
            background: 'black',
            width: 100,
            scaleX: progressRatio,
            transformOrigin: 'left',
            height: 5,
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        />
        <motion.div
          style={{
            zIndex: 10,
            background: 'black',
            opacity: 0.1,
            width: 100,
            transformOrigin: 'left',
            height: 5,
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        />
        <S.ItemsWrapper>
          {itemsToRender.map((el, index) => (
            <SlideItem
              itemIndex={index}
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
