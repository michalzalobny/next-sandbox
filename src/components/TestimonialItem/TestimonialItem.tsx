import React from 'react';

import { PreloadImage } from 'components/PreloadImage/PreloadImage';

import * as S from './TestimonialItem.styles';

interface Props {
  description: string;
  imageSrc: string;
}

export const TestimonialItem = (props: Props) => {
  const { description, imageSrc } = props;
  return (
    <>
      <S.Wrapper>
        <S.Title>{description.substring(10, description.length * 0.15)}</S.Title>
        <S.Description>{description.substring(0, 100)}</S.Description>

        <S.ImageWrapper>
          <PreloadImage imageSrc={imageSrc} alt="testimonial item" />
        </S.ImageWrapper>
      </S.Wrapper>
    </>
  );
};
