import styled from 'styled-components';
import { motion } from 'framer-motion';

import { s1, m1 } from 'utils/sharedStyled';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled(motion.div)`
  padding: ${sharedValues.spacing.s2};
  background: ${sharedValues.colors.lightGray};
`;

export const Description = styled(motion.p)`
  ${s1};
  margin: ${sharedValues.spacing.s2} 0;
`;

export const Title = styled(motion.h4)`
  ${m1};
  font-weight: 800;
  text-transform: capitalize;
  color: ${sharedValues.colors.purple};
`;

export const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  border-radius: ${sharedValues.spacing.s3};
  overflow: hidden;

  &:before {
    content: '';
    padding-bottom: 35%;
    display: block;
  }
`;
