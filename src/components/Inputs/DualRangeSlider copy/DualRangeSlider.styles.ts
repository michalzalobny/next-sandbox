import { motion } from 'framer-motion';
import styled from 'styled-components';

import { thumbSize } from './DualRangeSlider.settings';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Knob = styled(motion.div)`
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: 50%;
  width: 20px;
  border-radius: 50%;
  background-color: red;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const InputsWrapper = styled.span`
  display: inline-block;
  width: 100%;
  position: relative;
  height: 20px;

  &:before {
    content: '';
    width: 100%;
    height: 2px;
    background: gray;
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

    pointer-events: initial;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 0px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #424242;
    border-radius: 0px;
    border: 0px solid black;

    pointer-events: none;
  }

  input[type='range']::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    border-radius: 50%;
    background: #555bc8;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: ${-thumbSize / 2}px;

    pointer-events: initial;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #424242;

    pointer-events: none;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 0px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #424242;
    border-radius: 0px;
    border: 0px solid black;

    pointer-events: none;
  }

  input[type='range']::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: ${thumbSize}px;
    width: ${thumbSize}px;
    border-radius: 50%;
    background: #555bc8;
    cursor: pointer;

    pointer-events: initial;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 0px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: ${thumbSize}px 0;
    color: transparent;

    pointer-events: none;
  }

  input[type='range']::-ms-fill-lower {
    background: #424242;
    border: 0px solid black;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }

  input[type='range']::-ms-fill-upper {
    background: #424242;
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
    background: #555bc8;
    cursor: pointer;

    pointer-events: initial;
  }

  input[type='range']:focus::-ms-fill-lower {
    background: #424242;
  }
`;
