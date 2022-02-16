import React from 'react';

import { Carousel } from 'components/Carousel/Carousel';
import { DetailsInfo } from 'components/DetailsInfo/DetailsInfo';
import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { items } from 'assets/data';
import { ButtonsProps } from 'components/Carousel/Carousel.types';

import * as S from './DetailsCarousel.styles';

const Buttons = ({ paginate }: ButtonsProps) => {
  return (
    <S.ButtonsWrapper>
      <LinkHandler onClickFn={() => paginate(-1)}>
        <S.DropButton>Prev</S.DropButton>
      </LinkHandler>

      <S.Separator />

      <LinkHandler onClickFn={() => paginate(1)}>
        <S.DropButton>Next</S.DropButton>
      </LinkHandler>
    </S.ButtonsWrapper>
  );
};

const carouselItems = items.map(item => (
  <DetailsInfo imageSrc={item.imageSrc} description={item.description} key={item.imageSrc} />
));

export const DetailsCarousel = () => {
  return (
    <>
      <S.Wrapper>
        <Carousel carouselItems={carouselItems} Buttons={Buttons} />
      </S.Wrapper>
    </>
  );
};
