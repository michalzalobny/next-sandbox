import styled from 'styled-components';

import { media } from 'utils/media';

export const Wrapper = styled.div`
  margin: 120px auto;
  width: 85%;

  ${media.tablet} {
    width: 100rem;
  }
`;
