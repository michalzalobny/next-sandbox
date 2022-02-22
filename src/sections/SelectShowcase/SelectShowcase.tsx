import React from 'react';

import { MultiSelect } from 'components/Inputs/MultiSelect/MultiSelect';

import * as S from './SelectShowcase.styles';

export const SelectShowcase = () => {
  return (
    <>
      <S.Wrapper>
        <MultiSelect entries={['test', 'second']} />
      </S.Wrapper>
    </>
  );
};
