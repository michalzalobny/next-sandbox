import React, { useRef } from 'react';
import { useTransform, useSpring, MotionValue } from 'framer-motion';

import * as S from './LoopItem.styles';

interface Props {
  elWidth: number;
  elPadding: number;
  children: React.ReactElement;
  itemIndex: number;
  activeIndexMv: MotionValue<number>;
  itemsAmount: number;
}

//Can go from 0 to the amount of items - 1, defines at what point the element should be offset
const DISAPPEAR_START_OFFSET = 2;

export const LoopItem = (props: Props) => {
  const { activeIndexMv, itemIndex, itemsAmount, children, elPadding, elWidth } = props;
  const loopCounter = useRef(0);

  const offset = useTransform(activeIndexMv, latest => {
    const currentIndex = itemIndex - latest;
    const wholes = Math.floor((currentIndex + DISAPPEAR_START_OFFSET) / itemsAmount);
    loopCounter.current = wholes;

    return -latest * (elWidth + elPadding);
  });

  const offsetSpring = useSpring(offset, {
    stiffness: 120,
    damping: 15,
    restDelta: 0.01,
  }) as MotionValue<number>;

  const offsetSpringLoop = useTransform(offsetSpring, latest => {
    return latest - loopCounter.current * (elWidth + elPadding) * itemsAmount;
  });

  return (
    <>
      <S.Wrapper style={{ x: offsetSpringLoop, paddingRight: elPadding }}>
        <div style={{ width: elWidth }}>{children}</div>
      </S.Wrapper>
    </>
  );
};
