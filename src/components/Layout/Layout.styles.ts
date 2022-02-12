import styled, { css } from 'styled-components';

import { underline } from 'utils/sharedStyled';

interface ReadyWrapperProps {
  isReady: boolean;
}

export const ReadyWrapper = styled.div<ReadyWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  opacity: 1;
  transition: opacity 0.7s ease-in-out;
  background-color: white;

  ${props =>
    props.isReady &&
    css`
      opacity: 0;
      user-select: none;
      pointer-events: none;
    `}
`;

export const GithubWrapper = styled.div`
  position: fixed;
  z-index: 20;
  top: 20px;
  right: 30px;
`;

export const AuthorWrapper = styled.div`
  position: fixed;
  z-index: 20;
  bottom: 20px;
  right: 30px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const GithubLink = styled.span`
  display: inline-block;
  position: relative;
  font-size: 14px;
  ${underline};
`;

export const AuthorLink = styled.span`
  display: inline-block;
  font-weight: 800;
  position: relative;
  ${underline};
  margin-left: 5px;
`;
