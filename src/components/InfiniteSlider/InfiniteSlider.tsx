import React, { useRef, useEffect, useState } from 'react';
import { useMotionValue } from 'framer-motion';

import { breakpoints } from 'utils/media';
import { useElementSize } from 'hooks/useElementSize';
import { useWindowSize } from 'hooks/useWindowSize';
import { SlideItem } from 'components/InfiniteSlider/components/SlideItem/SlideItem';
import { calculateSize } from 'utils/functions/calculateSize';

import * as S from './InfiniteSlider.styles';

const renderBreakpoints = [
  {
    minWindowWidth: 0,
    itemsRendered: 1,
    padding: 0.12,
    isPaddingRelative: true,
  },
  {
    minWindowWidth: breakpoints.tablet,
    itemsRendered: 2,
    padding: 15,
    isPaddingRelative: false,
  },
  {
    minWindowWidth: breakpoints.desktop,
    itemsRendered: 3,
    padding: 15,
    isPaddingRelative: false,
  },
];

const itemSizeSSR = {
  elWidth: 1,
  elPadding: 1,
};

interface Props {
  itemsToRender: React.ReactElement[];
  activeIndex: number;
}

export const InfiniteSlider = (props: Props) => {
  const { activeIndex, itemsToRender } = props;
  const wrapperRef = useRef(null);
  const wrapperSize = useElementSize(wrapperRef);
  const { windowSize } = useWindowSize();
  const [itemSize, setItemSize] = useState(itemSizeSSR);
  const activeIndexMv = useMotionValue(activeIndex);

  useEffect(() => {
    activeIndexMv.set(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

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

  return (
    <>
      <S.Wrapper ref={wrapperRef}>
        <S.ItemsWrapper>
          {itemsToRender.map((el, key) => (
            <SlideItem
              itemsAmount={itemsToRender.length}
              itemIndex={key}
              activeIndexMv={activeIndexMv}
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
