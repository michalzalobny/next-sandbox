import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ItemsWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
