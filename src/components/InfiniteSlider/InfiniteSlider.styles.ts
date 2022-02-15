import styled from 'styled-components';
import { motion } from 'framer-motion';

import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ItemsWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  user-select: none;
`;

export const ProgressWrapper = styled(motion.div)`
  margin-top: ${sharedValues.spacing.s1};
  position: relative;
  width: 140px;
  height: 5px;
  border-radius: 2px;
  overflow: hidden;

  &:before {
    content: '';
    opacity: 0.2;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${sharedValues.colors.purple};
  }
`;

export const Progress = styled(motion.div)`
  transform-origin: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${sharedValues.colors.purple};
`;
