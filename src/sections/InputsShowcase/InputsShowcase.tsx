import React from 'react';

import { DualRangeSlider } from 'components/Inputs/DualRangeSlider/DualRangeSlider';
import { useDualRangeSlider } from 'components/Inputs/DualRangeSlider/DualRangeSlider.hooks';

import * as S from './InputsShowcase.styles';

export const InputsShowcase = () => {
  const minValue = 0;
  const maxValue = 400;

  const { setSliderMax, setSliderMin, sliderMax, sliderMin } = useDualRangeSlider({
    maxValue,
    minValue,
  });

  // React.useEffect(() => {
  //   console.log(sliderMin);
  // }, [sliderMin]);

  return (
    <>
      <S.Wrapper>
        <DualRangeSlider
          setSliderMax={setSliderMax}
          setSliderMin={setSliderMin}
          sliderMax={sliderMax}
          sliderMin={sliderMin}
          maxValue={maxValue}
          minValue={minValue}
        />
        <h1 style={{ fontSize: 15 }}>{sliderMax}</h1>
        <h1 style={{ fontSize: 15 }}>{sliderMin}</h1>
      </S.Wrapper>
    </>
  );
};
