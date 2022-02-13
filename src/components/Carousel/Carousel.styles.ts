import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { sharedValues } from 'utils/sharedValues';

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

interface ItemsContainerProps {
  show: boolean;
}

const heightDuration = '0.8s';
const opacityDuration = '0.8s';

export const ItemsContainer = styled.div<ItemsContainerProps>`
  position: relative;
  transition: height ${heightDuration} ${sharedValues.timings.t1},
    opacity ${opacityDuration} ${heightDuration} ease-in-out;
  opacity: 0;

  ${props =>
    props.show &&
    css`
      opacity: 1;
    `}
`;
