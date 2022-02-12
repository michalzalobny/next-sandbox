import styled from 'styled-components';

import { underline } from 'utils/sharedStyled';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled.div`
  padding: 25px 0;
  border-top: 1px solid ${sharedValues.colors.black};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  line-height: 1.3;
  color: ${sharedValues.colors.trueBlack};
  font-weight: 800;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 25px;
`;

export const LinkWrapper = styled.div``;

export const GithubLink = styled.span`
  position: relative;
  display: inline-block;
  font-size: 13px;
  margin: 10px 0;
  ${underline};
`;

export const Divider = styled.span`
  display: inline-block;
  width: 20px;
  height: 1px;
  background-color: ${sharedValues.colors.trueBlack};
  margin: 0 10px;
`;
