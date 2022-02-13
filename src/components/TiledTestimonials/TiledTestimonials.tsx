import React, { useState } from 'react';

import { LoopGallery } from 'components/LoopGallery/LoopGallery';
import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { items } from 'assets/data';
import { TestimonialItem } from 'components/TestimonialItem/TestimonialItem';

import * as S from './TiledTestimonials.styles';

export const TiledTestimonials = () => {
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

        <LoopGallery activeIndex={activeIndex} itemsToRender={testimonialItems} />
      </S.Wrapper>
    </>
  );
};
