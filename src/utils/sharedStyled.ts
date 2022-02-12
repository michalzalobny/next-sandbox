import { css } from 'styled-components';
import { sharedValues } from 'utils/sharedValues';

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

export const squareButton = css`
  font-size: 14px;
  background-color: ${sharedValues.colors.blue};
  color: ${sharedValues.colors.trueWhite};
  padding: 15px 20px;
  border-radius: 8px;
  position: relative;

  &::before {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background-color: inherit;
    z-index: -1;
    border-radius: inherit;
    transition-duration: 1s;
    transition-property: opacity, width, height;
  }

  &:hover {
    &::before {
      opacity: 0;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
    }
  }
`;
