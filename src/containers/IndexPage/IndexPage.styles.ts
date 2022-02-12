import styled, { css } from 'styled-components';

interface WrapperProps {
  isBlue: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  background: red;
  font-size: 2rem;

  ${props =>
    props.isBlue &&
    css`
      background-color: blue;
    `}
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: yellow;
`;

export const MainWrapper = styled.div`
  background: green;
`;
