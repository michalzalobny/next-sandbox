import React from 'react';

import { ExpandWrapper } from 'components/ExpandWrapper/ExpandWrapper';

import * as S from './MultiSelect.styles';
import { arrowWrapperV } from './MultiSelect.motion';
import { springMedium } from 'components/Animations/framerTransitions';

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

  const handleItemClick = (uid: string) => {
    const clickedItem = multiState.find(item => item.uid === uid);
    const newState = multiState.map(el => {
      if (el === clickedItem) {
        el.isChecked = !clickedItem.isChecked;
      }
      return el;
    });

    setMultiState(newState);
  };

  const activeLabelsArray = multiState.filter(el => el.isChecked === true);
  const activeLabelsText = () => {
    const charsArray: string[] = [];
    activeLabelsArray.forEach((el, key) => {
      if (key !== activeLabelsArray.length - 1) {
        charsArray.push(el.label);
        charsArray.push(', ');
      } else {
        charsArray.push(el.label);
      }
    });
    return charsArray.concat('');
  };

  return (
    <>
      <S.Wrapper>
        <S.SelectedItemsWrapper onClick={() => setIsExpanded(prev => !prev)}>
          <S.SelectedTextWrapper>
            {activeLabelsArray.length !== 0 ? (
              <S.SelectedItemText>{activeLabelsText()}</S.SelectedItemText>
            ) : (
              <S.SelectedItemText>Choose country...</S.SelectedItemText>
            )}
          </S.SelectedTextWrapper>

          <S.ArrowWrapper
            transition={springMedium}
            variants={arrowWrapperV}
            initial="initial"
            animate={isExpanded ? 'animate' : 'initial'}
          >
            <S.ArrowSvg />
          </S.ArrowWrapper>
        </S.SelectedItemsWrapper>

        <S.ExpandContainer>
          <ExpandWrapper isExpanded={isExpanded}>
            <S.ItemsWrapper>
              {multiState.map(item => {
                return (
                  <S.SelectItemComp
                    onClick={() => handleItemClick(item.uid)}
                    isChecked={item.isChecked}
                    label={item.label}
                    key={item.uid}
                  />
                );
              })}
            </S.ItemsWrapper>
          </ExpandWrapper>
        </S.ExpandContainer>
      </S.Wrapper>
    </>
  );
};
