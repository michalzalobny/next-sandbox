import React from 'react';

import * as S from './SelectItem.styles';
import { tickSvgV } from './SelectItem.motion';

export interface Props {
  label: string;
  isChecked: boolean;
  onClick: () => void;
}

export const SelectItem = (props: Props) => {
  const { isChecked, label, ...rest } = props;

  return (
    <>
      <S.Wrapper {...rest}>
        <S.ContentWrapper>
          <S.BoxWrapper>
            <S.TickWrapper>
              <S.TickSvg
                variants={tickSvgV}
                initial="initial"
                animate={isChecked ? 'animate' : 'initial'}
              />
            </S.TickWrapper>
          </S.BoxWrapper>
          <S.Label $isChecked={isChecked}>{label}</S.Label>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};
