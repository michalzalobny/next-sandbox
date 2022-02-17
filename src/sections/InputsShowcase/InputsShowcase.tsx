import React from 'react';

import { DualRangeSlider } from 'components/Inputs/DualRangeSlider/DualRangeSlider';
import { useDualRangeSlider } from 'components/Inputs/DualRangeSlider/DualRangeSlider.hooks';

import * as S from './InputsShowcase.styles';

export const InputsShowcase = () => {
  const { setSliderMax, setSliderMin, sliderMax, sliderMin } = useDualRangeSlider({
    maxValue: 2022,
    minValue: 1922,
  });

  return (
    <>
      <S.Wrapper>
        <DualRangeSlider
          setSliderMax={setSliderMax}
          setSliderMin={setSliderMin}
          sliderMax={sliderMax}
          sliderMin={sliderMin}
        />
      </S.Wrapper>
    </>
  );
};
