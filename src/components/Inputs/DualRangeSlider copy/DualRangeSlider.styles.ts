import { motion } from 'framer-motion';
import styled from 'styled-components';

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
    appearance: none;
    width: 100%;
    border: 0;
    box-shadow: 0;
    pointer-events: none;

    &::-webkit-slider-thumb {
      opacity: 0;
      appearance: none;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: blue;
      position: relative;
      cursor: pointer;
      pointer-events: all;
    }

    /* &:nth-child(1) {
      &::-webkit-slider-thumb {
        transform: translateX(-50%);
      }
    }

    &:nth-child(2) {
      &::-webkit-slider-thumb {
        transform: translateX(50%);
      }
    } */
  }
`;
