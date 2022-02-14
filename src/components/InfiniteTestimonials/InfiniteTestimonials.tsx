import React, { useState } from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { items } from 'assets/data';
import { TestimonialItem } from 'components/TestimonialItem/TestimonialItem';
import { InfiniteSlider } from 'components/InfiniteSlider/InfiniteSlider';

import * as S from './InfiniteTestimonials.styles';

export const InfiniteTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const paginate = (value: number) => {
    setActiveIndex(prev => prev + value);
  };

  const testimonialItems = items.map(item => (
    <TestimonialItem imageSrc={item.imageSrc} description={item.description} key={item.imageSrc} />
  ));

  return (
    <>
      <S.Wrapper>
        <S.ButtonsWrapper>
          <LinkHandler onClickFn={() => paginate(-1)}>
            <S.DropButton>Prev</S.DropButton>
          </LinkHandler>

          <S.Separator />

          <LinkHandler onClickFn={() => paginate(1)}>
            <S.DropButton>Next</S.DropButton>
          </LinkHandler>
        </S.ButtonsWrapper>
        <InfiniteSlider activeIndex={activeIndex} itemsToRender={testimonialItems} />
      </S.Wrapper>
    </>
  );
};
