import React from 'react';

import { DetailsCarousel } from 'sections/DetailsCarousel/DetailsCarousel';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { ShowcaseItemRenderer } from 'components/ShowcaseItemRenderer/ShowcaseItemRenderer';
import { TestimonialsSlider } from 'sections/TestimonialsSlider/TestimonialsSlider';
import { RangeSliderShowcase } from 'sections/RangeSliderShowcase/RangeSliderShowcase';
import { SelectShowcase } from 'sections/SelectShowcase/SelectShowcase';

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
          <RangeSliderShowcase />
        </ShowcaseItemRenderer>

        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/Dropdown/Dropdown.tsx"
          title="4. Dropdown"
        >
          <Dropdown />
        </ShowcaseItemRenderer>

        {/* <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/Dropdown/Dropdown.tsx"
          title="5. Multi select"
        >
          <SelectShowcase />
        </ShowcaseItemRenderer> */}
      </S.Wrapper>
    </>
  );
};
