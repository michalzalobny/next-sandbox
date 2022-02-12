import React from 'react';

import { Head } from 'seo/Head/Head';

import * as S from './IndexPage.styles';

export default function IndexPage() {
  return (
    <>
      <Head />
      <S.Wrapper>
        <S.Header>
          <S.Title>NextJS Sandbox</S.Title>
          <S.Description>
            NextJS Sandbox is a place with all custom components made in ReactJS and Framer Motion,
            that I use and maintain on regular basis.
          </S.Description>
        </S.Header>
      </S.Wrapper>
    </>
  );
}
