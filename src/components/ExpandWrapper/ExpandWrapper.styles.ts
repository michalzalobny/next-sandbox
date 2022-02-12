import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  transition: height 0.8s cubic-bezier(0.64, 0.02, 0.16, 0.97);
`;

export const GhostWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  user-select: none;
`;
