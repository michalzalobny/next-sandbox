import React, { useState } from 'react';

interface UseDualRangeSlider {
  minValue: number;
  maxValue: number;
}

export const useDualRangeSlider = ({ maxValue, minValue }: UseDualRangeSlider) => {
  const [sliderMin, setSliderMin] = useState(minValue);
  const [sliderMax, setSliderMax] = useState(maxValue);

  return {
    sliderMax,
    setSliderMax,
    sliderMin,
    setSliderMin,
  };
};
