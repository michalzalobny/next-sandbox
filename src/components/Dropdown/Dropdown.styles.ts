import styled from 'styled-components';

import { underline } from 'utils/sharedStyled';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const DropButton = styled.span`
  display: inline-block;
  position: relative;
  font-size: 14px;
  ${underline};
  cursor: pointer;
`;

export const Content = styled.div`
  width: 100%;
  background-color: ${sharedValues.colors.lightGray};
  font-size: 14px;
  padding: 30px;
`;