import React, { useEffect, useRef, useState } from 'react';
import { PanInfo } from 'framer-motion';

import { useElementSize } from 'hooks/useElementSize';
import { mix } from 'utils/functions/mix';

import * as S from './DualRangeSlider.styles';

interface Props {
  setSliderUpper: React.Dispatch<React.SetStateAction<number>>;
  setSliderLower: React.Dispatch<React.SetStateAction<number>>;
  sliderLower: number;
  sliderUpper: number;
  minValue: number;
  maxValue: number;
}

interface GetValue {
  offset: number;
  max: number;
  min: number;
  trackWidth: number;
}

const getValue = (props: GetValue): number => {
  const { max, offset, min, trackWidth } = props;
  const progress = offset / trackWidth;
  return mix(min, max, progress);
};

export const DualRangeSlider = (props: Props) => {
  const { maxValue, minValue, setSliderLower, setSliderUpper, sliderLower, sliderUpper } = props;
  const wrapperRef = useRef(null);
  const wrapperSize = useElementSize(wrapperRef);
  const wrapperWidthRef = useRef(1);
  const wrapperOffsetLeftRef = useRef(1);

  const separator = 20;

  //Refs are ghosting/coyping the slider state value but without react rerender
  //so there is no bugs in handleLower/handleUpper functions (the value is always the most current)
  const sliderLowerRef = useRef(sliderLower);
  const sliderUpperRef = useRef(sliderUpper);

  useEffect(() => {
    wrapperWidthRef.current = wrapperSize.size.clientRect.width;
    wrapperOffsetLeftRef.current = wrapperSize.size.offsetLeft;
  }, [wrapperSize]);

  const handleLower = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLower = parseInt(e.target.value);
    if (newLower <= sliderUpperRef.current - separator) {
      setSliderLower(newLower);
      sliderLowerRef.current = newLower;
    } else {
      if (sliderUpperRef.current < maxValue) {
        const lowerV = Math.min(maxValue - separator, newLower);
        const upperV = Math.min(maxValue, newLower + separator);
        setSliderLower(lowerV);
        setSliderUpper(upperV);
        sliderLowerRef.current = lowerV;
        sliderUpperRef.current = upperV;
      }
    }
  };

  const handleUpper = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUpper = parseInt(e.target.value);
    if (newUpper >= sliderLowerRef.current + separator) {
      setSliderUpper(newUpper);
      sliderUpperRef.current = newUpper;
    } else {
      if (sliderLowerRef.current > minValue) {
        const lowerV = Math.max(minValue, newUpper - separator);
        const upperV = Math.max(minValue + separator, newUpper);
        setSliderLower(lowerV);
        setSliderUpper(upperV);
        sliderLowerRef.current = lowerV;
        sliderUpperRef.current = upperV;
      }
    }
  };

  return (
    <>
      <S.Wrapper ref={wrapperRef}>
        <S.InputsWrapper>
          <input
            step={1}
            type="range"
            onChange={handleLower}
            min={minValue}
            max={maxValue}
            value={sliderLower}
            id="lower"
          />
          <input
            step={1}
            type="range"
            onChange={handleUpper}
            min={minValue}
            max={maxValue}
            value={sliderUpper}
            id="upper"
          />
        </S.InputsWrapper>
      </S.Wrapper>
    </>
  );
};
