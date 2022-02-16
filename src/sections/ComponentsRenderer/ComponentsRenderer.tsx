import React from 'react';

import { DetailsCarousel } from 'components/DetailsCarousel/DetailsCarousel';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { ShowcaseItemRenderer } from 'components/ShowcaseItemRenderer/ShowcaseItemRenderer';
import { TestimonialsSlider } from 'components/TestimonialsSlider/TestimonialsSlider';

import * as S from './ComponentsRenderer.styles';

export const ComponentsRenderer = () => {
  return (
    <>
      <S.Wrapper>
        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/InfiniteSlider/InfiniteSlider.tsx"
          title="1. Infinite slider"
        >
          <TestimonialsSlider />
        </ShowcaseItemRenderer>

        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/Carousel/Carousel.tsx"
          title="2. Carousel"
        >
          <DetailsCarousel />
        </ShowcaseItemRenderer>

        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/Dropdown/Dropdown.tsx"
          title="3. Dropdown"
        >
          <Dropdown />
        </ShowcaseItemRenderer>
      </S.Wrapper>
    </>
  );
};
