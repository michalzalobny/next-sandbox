import { css } from 'styled-components';

export const underline = css`
  &:before {
    content: '';
    position: absolute;
    top: 105%;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.8s cubic-bezier(0.64, 0.02, 0.16, 0.97);
  }

  &:hover {
    &:before {
      transform: scaleX(1);
    }
  }
`;
