import styled from 'styled-components';

import { s1, squareButton } from 'utils/sharedStyled';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const DropButton = styled.span`
  display: inline-block;
  cursor: pointer;
  ${squareButton};
`;

export const Content = styled.div`
  margin-top: ${sharedValues.spacing.s1};
  width: 100%;
  background-color: ${sharedValues.colors.lightGray};
  ${s1};
  padding: ${sharedValues.spacing.s2};
`;
