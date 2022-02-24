import React, { useEffect } from 'react';

import { ExpandWrapper } from 'components/ExpandWrapper/ExpandWrapper';

import * as S from './MultiSelect.styles';

export interface MultiStateItem {
  uid: string;
  label: string;
  isChecked: boolean;
}

interface Props {
  multiState: MultiStateItem[];
  setMultiState: React.Dispatch<React.SetStateAction<MultiStateItem[]>>;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MultiSelect = (props: Props) => {
  const { setIsExpanded, setMultiState, isExpanded, multiState } = props;

  useEffect(() => {
    console.log(multiState);
  }, [multiState]);

  return (
    <>
      <S.Wrapper>
        <S.ExpandContainer>
          <ExpandWrapper isExpanded={isExpanded}>h1</ExpandWrapper>
        </S.ExpandContainer>
      </S.Wrapper>
    </>
  );
};
