import styled from 'styled-components';

import { sharedValues } from 'utils/sharedValues';
import { underline, m2, s1 } from 'utils/sharedStyled';

export const Title = styled.h1`
  ${m2};
  color: ${sharedValues.colors.trueBlack};

  span {
    font-weight: 800;
  }
`;

export const Description = styled.p`
  ${s1};
  color: ${sharedValues.colors.purple};
  padding: ${sharedValues.spacing.s2};
  background-color: ${sharedValues.colors.lightPurple};
  border-radius: ${sharedValues.spacing.s3};
  display: inline-block;
`;

export const Header = styled.header`
  margin-bottom: ${sharedValues.spacing.s2};
`;

export const AuthorWrapper = styled.aside`
  ${s1};
  display: flex;
  align-items: center;
  margin-top: ${sharedValues.spacing.s1};
  margin-bottom: ${sharedValues.spacing.s2};
`;

export const AuthorLink = styled.span`
  display: inline-block;
  font-weight: 800;
  position: relative;
  ${underline};
`;

export const GithubLink = styled.span`
  display: inline-block;
  position: relative;
  ${underline};
`;

export const Separator = styled.span`
  &:before {
    content: '/';
    margin: 0 8px;
    font-size: 20px;
  }
`;
