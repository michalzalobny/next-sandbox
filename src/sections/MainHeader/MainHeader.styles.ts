import styled from 'styled-components';

import { sharedValues } from 'utils/sharedValues';
import { underline } from 'utils/sharedStyled';

export const Title = styled.h1`
  font-size: 4.5rem;
  color: ${sharedValues.colors.trueBlack};

  span {
    font-weight: 800;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${sharedValues.colors.purple};
  padding: 15px;
  background-color: ${sharedValues.colors.lightPurple};
  border-radius: 8px;
  display: inline-block;
`;

export const Header = styled.header`
  margin: 80px 0;
`;

export const AuthorWrapper = styled.aside`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 25px;
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
