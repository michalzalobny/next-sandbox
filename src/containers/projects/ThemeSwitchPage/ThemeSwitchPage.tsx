import React from 'react';

import { Head } from 'seo/Head/Head';

import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector';

import * as S from './ThemeSwitchPage.styles';

export default function IndexPage() {
  return (
    <>
      <Head />

      <S.Wrapper>
        <ThemeSelector />
      </S.Wrapper>
    </>
  );
}
