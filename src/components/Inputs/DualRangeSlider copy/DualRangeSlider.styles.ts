import { motion } from 'framer-motion';
import styled from 'styled-components';

import { thumbSize } from './DualRangeSlider.settings';

const poleColor = '#c7c7c7';
const knobColor = '#000000';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background: ${poleColor};
    border-radius: 50%;
    z-index: 1;
    user-select: none;
    pointer-events: none;
  }

  &:after {
    left: initial;
    right: 0;
  }
`;

export const Knob = styled(motion.div)`
  user-select: none;
  pointer-events: none;
  position: absolute;
  z-index: 2;
  top: 50%;
  width: ${thumbSize}px;
  border-radius: 50%;
  background-color: ${knobColor};

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const InputsWrapper = styled.span`
  display: inline-block;
  width: 100%;
  height: ${thumbSize}px;

  &:before {
    content: '';
    width: 100%;
    height: 2px;
    background: ${poleColor};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  input[type='range'] {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    -webkit-appearance: none;
    width: 100%;
    pointer-events: none;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 0px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: black;
    border-radius: 0px;
    border: 0px solid black;
  }

  input[type='range']::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    border-radius: 50%;
    background: blue;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: ${-thumbSize / 2}px;
    pointer-events: initial;
    opacity: 0;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: black;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 0px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: black;
    border-radius: 0px;
    border: 0px solid black;
  }

  input[type='range']::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    border-radius: 50%;
    background: blue;
    cursor: pointer;
    pointer-events: initial;
    opacity: 0;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 0px;
    background: transparent;
    border-color: transparent;
    border-width: ${thumbSize}px 0;
    color: transparent;
  }

  input[type='range']::-ms-fill-lower {
    background: black;
    border: 0px solid black;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }

  input[type='range']::-ms-fill-upper {
    background: black;
    border: 0px solid black;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }

  input[type='range']::-ms-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    border-radius: 50%;
    background: blue;
    cursor: pointer;
    pointer-events: initial;
    opacity: 0;
  }

  input[type='range']:focus::-ms-fill-lower {
    background: black;
  }
`;
