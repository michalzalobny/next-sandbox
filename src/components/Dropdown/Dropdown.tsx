import React, { useState } from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { ExpandWrapper } from 'components/ExpandWrapper/ExpandWrapper';

import * as S from './Dropdown.styles';

export const Dropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.ButtonWrapper>
          <LinkHandler onClickFn={() => setIsExpanded(prev => !prev)}>
            <S.DropButton>Toggle dropdown</S.DropButton>
          </LinkHandler>
        </S.ButtonWrapper>

        <ExpandWrapper isExpanded={isExpanded}>
          <S.Spacer />
          <S.Content>Dropdown content</S.Content>
        </ExpandWrapper>
      </S.Wrapper>
    </>
  );
};
