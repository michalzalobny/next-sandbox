import React from 'react';

import * as S from './DualRangeSlider.styles';

interface Props {
  setSliderMax: React.Dispatch<React.SetStateAction<number>>;
  setSliderMin: React.Dispatch<React.SetStateAction<number>>;
  sliderMin: number;
  sliderMax: number;
}

export const DualRangeSlider = (props: Props) => {
  const { setSliderMax, sliderMin, sliderMax, setSliderMin } = props;
  return (
    <>
      <S.Wrapper>{sliderMin}</S.Wrapper>
    </>
  );
};
