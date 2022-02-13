import React, { useState } from 'react';

import { LoopGallery } from 'components/LoopGallery/LoopGallery';
import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { wrap } from 'utils/functions/wrap';
import { items } from 'assets/data';

import * as S from './TiledTestimonials.styles';

export const TiledTestimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = wrap(0, items.length, page);
  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

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

        <LoopGallery />
      </S.Wrapper>
    </>
  );
};
