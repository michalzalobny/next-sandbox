import React from 'react';

import { Dropdown } from 'components/Dropdown/Dropdown';

import * as S from './ComponentsRenderer.styles';

export const ComponentsRenderer = () => {
  return (
    <>
      <S.Wrapper>
        <Dropdown />
      </S.Wrapper>
    </>
  );
};
