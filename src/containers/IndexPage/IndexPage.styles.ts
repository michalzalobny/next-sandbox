import styled from 'styled-components';

import { media } from 'utils/media';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 85%;

  ${media.tablet} {
    width: 140rem;
  }
`;
