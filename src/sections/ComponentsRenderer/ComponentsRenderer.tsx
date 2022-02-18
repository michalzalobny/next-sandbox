import React from 'react';

import { DetailsCarousel } from 'sections/DetailsCarousel/DetailsCarousel';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { ShowcaseItemRenderer } from 'components/ShowcaseItemRenderer/ShowcaseItemRenderer';
import { TestimonialsSlider } from 'sections/TestimonialsSlider/TestimonialsSlider';
import { InputsShowcase } from 'sections/InputsShowcase/InputsShowcase';

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
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/Inputs/DualRangeSlider/DualRangeSlider.tsx"
          title="3. Range slider"
        >
          <InputsShowcase />
        </ShowcaseItemRenderer>

        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/Dropdown/Dropdown.tsx"
          title="4. Dropdown"
        >
          <Dropdown />
        </ShowcaseItemRenderer>
      </S.Wrapper>
    </>
  );
};
