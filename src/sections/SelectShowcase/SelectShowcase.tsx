import React, { useEffect, useState } from 'react';

import { MultiSelect, MultiStateItem } from 'components/Inputs/MultiSelect/MultiSelect';

import * as S from './SelectShowcase.styles';

export const SelectShowcase = () => {
  const [multiState, setMultiState] = useState<MultiStateItem[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const data: MultiStateItem[] = [
      { label: 'France', uid: 'france', isChecked: true },
      { label: 'USA', uid: 'usa', isChecked: false },
      { label: 'Belgium', uid: 'belgium', isChecked: false },
      { label: 'China', uid: 'china', isChecked: false },
    ];
    setMultiState(data);
  }, []);

  return (
    <>
      <S.Wrapper>
        <MultiSelect
          setIsExpanded={setIsExpanded}
          isExpanded={isExpanded}
          multiState={multiState}
          setMultiState={setMultiState}
        />
      </S.Wrapper>
    </>
  );
};
