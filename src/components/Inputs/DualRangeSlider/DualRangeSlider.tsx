import React from 'react';

import * as S from './DualRangeSlider.styles';

interface Props {}

export const DualRangeSlider = (props: Props) => {
  const { ...rest } = props;
  return (
    <>
      <S.Wrapper {...rest}>test</S.Wrapper>
    </>
  );
};
