import React, { useRef } from 'react';

import { useElementSize } from 'hooks/useElementSize';

import * as S from './DualRangeSlider.styles';

interface Props {
  setSliderMax: React.Dispatch<React.SetStateAction<number>>;
  setSliderMin: React.Dispatch<React.SetStateAction<number>>;
  sliderMin: number;
  sliderMax: number;
}

export const DualRangeSlider = (props: Props) => {
  const { setSliderMax, sliderMin, sliderMax, setSliderMin } = props;
  const wrapperRef = useRef(null);
  const { size } = useElementSize(wrapperRef);

  return (
    <>
      <S.Wrapper>{sliderMin}</S.Wrapper>
      <input type="hidden" name={'minBudget'} defaultValue={sliderMin} />
      <input type="hidden" name={'maxBudget'} defaultValue={sliderMax} />
    </>
  );
};
