import styled from 'styled-components';

import { squareButton } from 'utils/sharedStyled';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-bottom: ${sharedValues.spacing.s1};
`;

export const Separator = styled.div`
  width: ${sharedValues.spacing.s1};
`;

export const DropButton = styled.span`
  display: inline-block;
  cursor: pointer;
  ${squareButton};
`;
