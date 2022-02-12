import React from 'react';

import { Head } from 'seo/Head/Head';
import { ComponentsRenderer } from 'sections/ComponentsRenderer/ComponentsRenderer';
import { MainHeader } from 'sections/MainHeader/MainHeader';

import * as S from './IndexPage.styles';

export default function IndexPage() {
  return (
    <>
      <Head />
      <S.Wrapper>
        <MainHeader />
        <ComponentsRenderer />
      </S.Wrapper>
    </>
  );
}
