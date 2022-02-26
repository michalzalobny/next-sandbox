import styled, { css } from 'styled-components';

import { Tick } from '../svg/Tick';

export const Wrapper = styled.button`
  display: block;
  width: 100%;
  cursor: pointer;
`;

export const TickWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 100%;
`;

export const TickSvg = styled(Tick)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const BoxWrapper = styled.div`
  width: 20px;
  position: relative;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 100%;
  }
`;

interface LabelProps {
  $isChecked: boolean;
}

export const Label = styled.label<LabelProps>`
  font-size: 16px;
  padding: 15px 0;
  margin-left: 20px;
  font-weight: 800;
  color: gray;
  transition: color 0.5s;
  pointer-events: none;

  ${props =>
    props.$isChecked &&
    css`
      color: black;
    `}
`;
