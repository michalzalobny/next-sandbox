import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Track = styled.div`
  width: 100%;
  height: 10px;
  background-color: red;
  position: relative;
`;

interface KnobProps {
  knobWidth: number;
}

export const Knob = styled(motion.div)<KnobProps>`
  width: ${props => props.knobWidth}px;
  opacity: 0.5;
  border-radius: 50%;
  background-color: blue;
  position: absolute;
  top: 50%;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
