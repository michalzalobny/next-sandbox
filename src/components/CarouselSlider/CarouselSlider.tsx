import React, { useState } from 'react';

import { Carousel } from 'components/Carousel/Carousel';
import { DetailsInfo } from 'components/DetailsInfo/DetailsInfo';
import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import { items } from './data';
import { wrap } from './functions/wrap';

import * as S from './CarouselSlider.styles';

export const CarouselSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = wrap(0, items.length, page);
  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

  const carouselItems = items.map(item => (
    <DetailsInfo
      imageSrc={item.imageSrc}
      description={item.description}
      direction={direction}
      key={item.imageSrc}
    />
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

        <Carousel
          direction={direction}
          currentIndex={currentIndex}
          paginate={paginate}
          page={page}
          items={carouselItems}
        />
      </S.Wrapper>
    </>
  );
};
