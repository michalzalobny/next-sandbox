import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Item = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ItemsContainer = styled(motion.div)`
  position: relative;
  transition: height 0.8s cubic-bezier(0.64, 0.02, 0.16, 0.97);
`;
