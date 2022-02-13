import React from 'react';

import { CarouselSlider } from 'components/CarouselSlider/CarouselSlider';
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
        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/tree/main/src/components/CarouselSlider"
          title="2. Carousel slider"
        >
          <CarouselSlider />
        </ShowcaseItemRenderer>
      </S.Wrapper>
    </>
  );
};
