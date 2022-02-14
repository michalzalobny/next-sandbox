import React, { useRef } from 'react';
import { useTransform, MotionValue } from 'framer-motion';

import * as S from './SlideItem.styles';

interface Props {
  elWidth: number;
  elPadding: number;
  children: React.ReactElement;
  offsetX: MotionValue<number>;
  itemsAmount: number;
  itemIndex: number;
}

export const SlideItem = (props: Props) => {
  const { itemIndex, offsetX, itemsAmount, children, elPadding, elWidth } = props;
  const elRef = useRef<HTMLDivElement | null>(null);
  const loopCounter = useRef(0);

  const offsetXMod = useTransform(offsetX, latest => {
    const fullWidth = elWidth + elPadding;
    const currentOffset = itemIndex * fullWidth - latest;
    const wholes = Math.floor((currentOffset + fullWidth) / (itemsAmount * fullWidth));
    loopCounter.current = wholes;
    return -latest - loopCounter.current * fullWidth * itemsAmount;
  });

  return (
    <>
      <S.Wrapper ref={elRef} style={{ x: offsetXMod, paddingRight: elPadding }}>
        <div style={{ width: elWidth }}>{children}</div>
      </S.Wrapper>
    </>
  );
};
