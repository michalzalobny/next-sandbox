import React, { useEffect, useRef, useState } from 'react';
import { PanInfo } from 'framer-motion';

import { useElementSize } from 'hooks/useElementSize';
import { mix } from 'utils/functions/mix';

import * as S from './DualRangeSlider.styles';

interface Props {
  setSliderMax: React.Dispatch<React.SetStateAction<number>>;
  setSliderMin: React.Dispatch<React.SetStateAction<number>>;
  sliderMin: number;
  sliderMax: number;
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
  const { maxValue, minValue, setSliderMax, sliderMin, sliderMax, setSliderMin } = props;
  const wrapperRef = useRef(null);
  const wrapperSize = useElementSize(wrapperRef);
  const wrapperWidthRef = useRef(1);
  const wrapperOffsetLeftRef = useRef(1);

  const [knobMinOffset, setKnobMinOffset] = useState(0);
  const [knobMaxOffset, setKnobMaxOffset] = useState(300);

  const knobWidth = 30;
  const separator = knobWidth * 2;
  const knobOffset = knobWidth * 0.5;

  useEffect(() => {
    wrapperWidthRef.current = wrapperSize.size.clientRect.width;
    wrapperOffsetLeftRef.current = wrapperSize.size.offsetLeft;
  }, [wrapperSize]);

  return (
    <>
      <S.Wrapper ref={wrapperRef}>
        <S.Track>
          <S.Knob
            $knobWidth={knobWidth}
            drag="x"
            dragMomentum={false}
            dragElastic={1}
            initial={{
              x: knobMinOffset,
              y: '-50%',
            }}
            onDragEnd={() => {
              const value = getValue({
                offset: knobMinOffset,
                trackWidth: wrapperSize.size.clientRect.width,
                min: minValue,
                max: maxValue,
              });
              setSliderMin(value);
            }}
            onDrag={(_e, panInfo: PanInfo) => {
              let offset = panInfo.point.x - wrapperOffsetLeftRef.current;
              if (offset >= knobMaxOffset - separator) {
                offset = knobMaxOffset - separator;
              } else if (offset <= 0) {
                offset = 0;
              }
              setKnobMinOffset(offset);
            }}
            dragConstraints={{
              left: 0 - knobOffset,
              right: knobMaxOffset - separator,
            }}
          />

          <S.Knob
            $knobWidth={knobWidth}
            drag="x"
            dragMomentum={false}
            dragElastic={1}
            initial={{
              x: knobMaxOffset,
              y: '-50%',
            }}
            onDragEnd={() => {
              const value = getValue({
                offset: knobMaxOffset,
                trackWidth: wrapperSize.size.clientRect.width,
                min: minValue,
                max: maxValue,
              });
              setSliderMax(value);
            }}
            onDrag={(_e, panInfo: PanInfo) => {
              let offset = panInfo.point.x - wrapperOffsetLeftRef.current;
              if (offset <= knobMinOffset + separator) {
                offset = knobMinOffset + separator;
              } else if (offset >= wrapperWidthRef.current) {
                offset = wrapperWidthRef.current;
              }
              setKnobMaxOffset(offset);
            }}
            dragConstraints={{
              left: knobMinOffset + separator,
              right: wrapperWidthRef.current - knobOffset,
            }}
          />
        </S.Track>
      </S.Wrapper>
      <input type="hidden" name={'minBudget'} defaultValue={sliderMin} />
      <input type="hidden" name={'maxBudget'} defaultValue={sliderMax} />
    </>
  );
};
