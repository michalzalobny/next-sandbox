import React, { useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

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

export const DualRangeSlider = (props: Props) => {
  const { maxValue, minValue, setSliderLower, setSliderUpper, sliderLower, sliderUpper } = props;
  const wrapperRef = useRef(null);
  const wrapperSize = useElementSize(wrapperRef);
  const wrapperWidthRef = useRef(1);
  const wrapperOffsetLeftRef = useRef(1);

  const separator = 0;

  const sliderLowerMv = useMotionValue(sliderLower);
  const sliderUpperMv = useMotionValue(sliderUpper);

  const knobLowerX = useTransform(sliderLowerMv, latest => {
    return mix(20, wrapperWidthRef.current, latest / maxValue) - 20;
  });
  const knobLowerXSpring = useSpring(knobLowerX, { stiffness: 900, damping: 50, restDelta: 0.01 });

  const knobUpperX = useTransform(sliderUpperMv, latest => {
    return mix(20, wrapperWidthRef.current, latest / maxValue) - 20;
  });
  const knobUpperXSpring = useSpring(knobUpperX, { stiffness: 900, damping: 50, restDelta: 0.01 });

  useEffect(() => {
    wrapperWidthRef.current = wrapperSize.size.clientRect.width;
    wrapperOffsetLeftRef.current = wrapperSize.size.offsetLeft;
  }, [wrapperSize]);

  const handleLower = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLower = parseInt(e.target.value);
    if (newLower <= sliderUpperMv.get() - separator) {
      setSliderLower(newLower);
      sliderLowerMv.set(newLower);
    } else {
      if (sliderUpperMv.get() < maxValue) {
        const lowerV = Math.min(maxValue - separator, newLower);
        const upperV = Math.min(maxValue, newLower + separator);
        setSliderLower(lowerV);
        setSliderUpper(upperV);
        sliderLowerMv.set(lowerV);
        sliderUpperMv.set(upperV);
      }
    }
  };

  const handleUpper = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUpper = parseInt(e.target.value);
    if (newUpper >= sliderLowerMv.get() + separator) {
      setSliderUpper(newUpper);
      sliderUpperMv.set(newUpper);
    } else {
      if (sliderLowerMv.get() > minValue) {
        const lowerV = Math.max(minValue, newUpper - separator);
        const upperV = Math.max(minValue + separator, newUpper);
        setSliderLower(lowerV);
        setSliderUpper(upperV);
        sliderLowerMv.set(lowerV);
        sliderUpperMv.set(upperV);
      }
    }
  };

  return (
    <>
      <S.Wrapper ref={wrapperRef}>
        <S.InputsWrapper>
          <S.Knob style={{ x: knobLowerXSpring, y: '-50%' }} />
          <S.Knob style={{ x: knobUpperXSpring, y: '-50%' }} />
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
