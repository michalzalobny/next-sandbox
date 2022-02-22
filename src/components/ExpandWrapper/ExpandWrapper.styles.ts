import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
`;

export const ContentWrapper = styled(motion.div)``;

export const GhostWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  user-select: none;
`;
