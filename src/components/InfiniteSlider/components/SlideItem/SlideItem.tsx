import React, { useRef } from 'react';
import { useTransform, MotionValue } from 'framer-motion';

import { modHorizontal } from 'utils/functions/modHorizontal';

import * as S from './SlideItem.styles';

interface Props {
  elWidth: number;
  elPadding: number;
  children: React.ReactElement;
  offsetX: MotionValue<number>;
  itemsAmount: number;
}

export const SlideItem = (props: Props) => {
  const { offsetX, itemsAmount, children, elPadding, elWidth } = props;
  const elRef = useRef<HTMLDivElement | null>(null);

  const offsetXMod = useTransform(offsetX, latestXMvSpring => {
    return modHorizontal({
      value: latestXMvSpring,
      elRef,
      limit: (elWidth + elPadding) * itemsAmount,
    });
  });

  return (
    <>
      <S.Wrapper ref={elRef} style={{ x: offsetXMod, paddingRight: elPadding }}>
        <div style={{ width: elWidth }}>{children}</div>
      </S.Wrapper>
    </>
  );
};
