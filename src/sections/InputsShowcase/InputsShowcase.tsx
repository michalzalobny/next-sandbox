import React, { useState } from 'react';

// import { DualRangeSlider } from 'components/Inputs/DualRangeSlider/DualRangeSlider';
import { DualRangeSlider } from 'components/Inputs/DualRangeSlider copy/DualRangeSlider';

import * as S from './InputsShowcase.styles';

export const InputsShowcase = () => {
  const minValue = 0;
  const maxValue = 400;

  const [sliderUpper, setSliderUpper] = useState(maxValue);
  const [sliderLower, setSliderLower] = useState(minValue);

  return (
    <>
      <S.Wrapper>
        <DualRangeSlider
          setSliderUpper={setSliderUpper}
          setSliderLower={setSliderLower}
          sliderUpper={sliderUpper}
          sliderLower={sliderLower}
          maxValue={maxValue}
          minValue={minValue}
        />
        <h1 style={{ fontSize: 20 }}>{sliderLower}</h1>
        <h1 style={{ fontSize: 20 }}>{sliderUpper}</h1>
      </S.Wrapper>
    </>
  );
};
