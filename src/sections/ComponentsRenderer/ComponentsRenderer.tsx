import React from 'react';

import { Dropdown } from 'components/Dropdown/Dropdown';
import { ShowcaseItemRenderer } from 'components/ShowcaseItemRenderer/ShowcaseItemRenderer';

import * as S from './ComponentsRenderer.styles';

export const ComponentsRenderer = () => {
  return (
    <>
      <S.Wrapper>
        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/Dropdown/Dropdown.tsx"
          title="1. Dropdown/Expandable wrapper"
        >
          <Dropdown />
        </ShowcaseItemRenderer>
      </S.Wrapper>
    </>
  );
};
