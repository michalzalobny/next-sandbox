import React from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { items } from 'assets/data';
import { TestimonialItem } from 'components/TestimonialItem/TestimonialItem';
import { InfiniteSlider } from 'components/InfiniteSlider/InfiniteSlider';
import { ButtonsProps } from 'components/InfiniteSlider/InfiniteSlider.types';

import * as S from './InfiniteTestimonials.styles';

const Buttons = ({ next, prev }: ButtonsProps) => {
  return (
    <S.ButtonsWrapper>
      <LinkHandler onClickFn={prev}>
        <S.DropButton>Prev</S.DropButton>
      </LinkHandler>

      <S.Separator />

      <LinkHandler onClickFn={next}>
        <S.DropButton>Next</S.DropButton>
      </LinkHandler>
    </S.ButtonsWrapper>
  );
};

export const InfiniteTestimonials = () => {
  const testimonialItems = items.map(item => (
    <TestimonialItem imageSrc={item.imageSrc} description={item.description} key={item.imageSrc} />
  ));

  return (
    <>
      <S.Wrapper>
        <InfiniteSlider Buttons={Buttons} itemsToRender={testimonialItems} />
      </S.Wrapper>
    </>
  );
};
