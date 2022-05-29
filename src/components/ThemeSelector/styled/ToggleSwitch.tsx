import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  $buttonWidth: number;
  $buttonHeight: number;
}

export const ToggleSwitch = styled(motion.button)<Props>`
  position: relative;
  cursor: pointer;
  width: ${props => props.$buttonWidth}px;
  height: ${props => props.$buttonHeight}px;
  background-color: transparent;
  border-radius: 150px;
  overflow: hidden;
  box-shadow: '0px 0px 50px rgba(9, 16, 31, 0.25)';
  //Fix ios issues with border-radius
  mask-image: -webkit-radial-gradient(white, black);
`;
