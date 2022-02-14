import React from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { items } from 'assets/data';
import { TestimonialItem } from 'components/TestimonialItem/TestimonialItem';
import { InfiniteSlider } from 'components/InfiniteSlider/InfiniteSlider';

import * as S from './InfiniteTestimonials.styles';

export const InfiniteTestimonials = () => {
  const testimonialItems = items.map(item => (
    <TestimonialItem imageSrc={item.imageSrc} description={item.description} key={item.imageSrc} />
  ));

  return (
    <>
      <S.Wrapper>
        <S.ButtonsWrapper>
          <LinkHandler
            onClickFn={() => {
              console.log('1');
            }}
          >
            <S.DropButton>Prev</S.DropButton>
          </LinkHandler>

          <S.Separator />

          <LinkHandler
            onClickFn={() => {
              console.log('2');
            }}
          >
            <S.DropButton>Next</S.DropButton>
          </LinkHandler>
        </S.ButtonsWrapper>
        <InfiniteSlider itemsToRender={testimonialItems} />
      </S.Wrapper>
    </>
  );
};
