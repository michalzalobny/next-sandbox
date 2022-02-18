import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

import { useElementSize } from 'hooks/useElementSize';
import { useWindowSize } from 'hooks/useWindowSize';
import { mix } from 'utils/functions/mix';

import * as S from './DualRangeSlider.styles';
import { thumbSize, spring } from './DualRangeSlider.settings';

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
  const { windowSize } = useWindowSize();
  const separator = 0; //Value Distance between knobs
  const sliderLowerMv = useMotionValue(sliderLower);
  const sliderUpperMv = useMotionValue(sliderUpper);

  const knobLowerX = useTransform(sliderLowerMv, latest => {
    return (
      mix(thumbSize, wrapperWidthRef.current, (latest - minValue) / (maxValue - minValue)) -
      thumbSize
    );
  });
  const knobLowerXSpring = useSpring(knobLowerX, spring);

  const knobUpperX = useTransform(sliderUpperMv, latest => {
    return (
      mix(thumbSize, wrapperWidthRef.current, (latest - minValue) / (maxValue - minValue)) -
      thumbSize
    );
  });
  const knobUpperXSpring = useSpring(knobUpperX, spring);

  useEffect(() => {
    wrapperWidthRef.current = wrapperSize.size.clientRect.width;
    wrapperOffsetLeftRef.current = wrapperSize.size.offsetLeft;
  }, [wrapperSize]);

  //On window resize
  useEffect(() => {
    handleLower(sliderLower);
    handleUpper(sliderUpper);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);

  const handleLower = (value: number) => {
    const newLower = value;
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

  const handleUpper = (value: number) => {
    const newUpper = value;
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
          <S.Label style={{ x: '-25%', left: knobLowerXSpring }}>{`${sliderLower}s`}</S.Label>
          <S.Label style={{ x: '-25%', left: knobUpperXSpring }}>{`${sliderUpper}s`}</S.Label>

          <S.Knob style={{ x: knobLowerXSpring, y: '-50%' }} />
          <S.Knob style={{ x: knobUpperXSpring, y: '-50%' }} />
          <input
            step={1}
            type="range"
            onChange={e => handleLower(parseInt(e.target.value))}
            min={minValue}
            max={maxValue}
            value={sliderLower}
            id="lower"
          />
          <input
            step={1}
            type="range"
            onChange={e => handleUpper(parseInt(e.target.value))}
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
