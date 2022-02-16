import React from 'react';

import { CarouselSlider } from 'components/CarouselSlider/CarouselSlider';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { ShowcaseItemRenderer } from 'components/ShowcaseItemRenderer/ShowcaseItemRenderer';
import { InfiniteTestimonials } from 'components/InfiniteTestimonials/InfiniteTestimonials';

import * as S from './ComponentsRenderer.styles';

export const ComponentsRenderer = () => {
  return (
    <>
      <S.Wrapper>
        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/Carousel/Carousel.tsx"
          title="1. Carousel slider"
        >
          <CarouselSlider />
        </ShowcaseItemRenderer>

        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/InfiniteSlider/InfiniteSlider.tsx"
          title="2. Infinite slider"
        >
          <InfiniteTestimonials />
        </ShowcaseItemRenderer>

        <ShowcaseItemRenderer
          sourceHref="https://github.com/javusScriptus/next-sandbox/blob/main/src/components/Dropdown/Dropdown.tsx"
          title="3. Dropdown/Expandable wrapper"
        >
          <Dropdown />
        </ShowcaseItemRenderer>
      </S.Wrapper>
    </>
  );
};
