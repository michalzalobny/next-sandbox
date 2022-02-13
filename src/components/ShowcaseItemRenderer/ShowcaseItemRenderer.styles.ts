import styled from 'styled-components';

import { underline, s1, m1 } from 'utils/sharedStyled';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled.div`
  padding: ${sharedValues.spacing.s2} 0;
  border-top: 1px solid ${sharedValues.colors.black};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  flex: 0 0 100%;
  ${m1};
  color: ${sharedValues.colors.trueBlack};
  font-weight: 800;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: ${sharedValues.spacing.s2};
`;

export const LinkWrapper = styled.div``;

export const GithubLink = styled.span`
  position: relative;
  display: inline-block;
  ${s1};
  ${underline};
`;

export const Divider = styled.span`
  display: inline-block;
  width: 20px;
  height: 1px;
  background-color: ${sharedValues.colors.trueBlack};
  margin-right: ${sharedValues.spacing.s1};
`;
