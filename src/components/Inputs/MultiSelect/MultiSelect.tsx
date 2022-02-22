import React, { useState } from 'react';

import { ExpandWrapper } from 'components/ExpandWrapper/ExpandWrapper';

import * as S from './MultiSelect.styles';

interface Props {
  entries: string[];
}

export const MultiSelect = (props: Props) => {
  const { entries } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  return (
    <>
      <S.Wrapper>
        <h1 onClick={() => setIsExpanded(prev => !prev)} style={{ fontSize: 20 }}>
          OPEN
        </h1>
        <S.ExpandContainer>
          <ExpandWrapper isExpanded={isExpanded}>
            <h1>dasd</h1>
            <h1 style={{ fontSize: 40 }}>dasdas</h1>
            <S.InsideContainer>
              <div onClick={() => setIsExpanded2(prev => !prev)} style={{ fontSize: 18 }}>
                ABSOLUTE item wrapper{' '}
              </div>
              <S.InsideExpandWrapper>
                <ExpandWrapper isExpanded={isExpanded2}>
                  <div
                    style={{
                      height: 50,
                      width: 50,
                      background: 'blue',
                    }}
                  />
                </ExpandWrapper>
              </S.InsideExpandWrapper>
            </S.InsideContainer>
          </ExpandWrapper>
        </S.ExpandContainer>
      </S.Wrapper>
    </>
  );
};
