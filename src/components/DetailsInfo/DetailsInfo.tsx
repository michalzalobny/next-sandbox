import React from 'react';

import { PreloadImage } from 'components/PreloadImage/PreloadImage';

import * as S from './DetailsInfo.styles';
import { slide } from './DetailsInfo.motion';

interface Props {
  direction?: number; //Used to animate content elements depending on the direction of the slide, appended in Carousel component
  description: string;
  imageSrc: string;
}

export const DetailsInfo = (props: Props) => {
  const { description, imageSrc, direction } = props;
  return (
    <>
      <S.Wrapper
        variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } }, exit: {} }}
      >
        <S.Title {...slide} custom={direction}>
          {description.substring(description.length * 0.9, description.length)}
        </S.Title>
        <S.Description {...slide} custom={direction}>
          {description}
        </S.Description>

        <S.ImageWrapper {...slide} custom={direction}>
          <PreloadImage imageSrc={imageSrc} alt="slider item" />
        </S.ImageWrapper>
      </S.Wrapper>
    </>
  );
};
