import React from 'react';

import * as S from './SelectItem.styles';
import { tickSvgV } from './SelectItem.motion';

export interface Props {
  label: string;
  isChecked: boolean;
  onClick: () => void;
  tabIndex: number;
  addBorder: boolean;
}

export const SelectItem = (props: Props) => {
  const { addBorder, isChecked, label, ...rest } = props;

  return (
    <>
      <S.Wrapper {...rest}>
        <S.ContentWrapper addBorder={addBorder}>
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
