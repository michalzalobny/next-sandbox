import styled from 'styled-components';

import { sharedValues } from 'utils/sharedValues';
import { media } from 'utils/media';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 85%;

  ${media.tablet} {
    width: 140rem;
  }
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  color: ${sharedValues.colors.trueBlack};
  font-weight: 800;
  margin-bottom: 25px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: ${sharedValues.colors.trueBlack};
  padding: 1.5rem;
  background-color: ${sharedValues.colors.lightGray};
  border-radius: 8px;
`;

export const Header = styled.header`
  margin: 8rem 0;
`;
