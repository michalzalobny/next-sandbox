import React from 'react';
import Link from 'next/link';

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
      <Link href="/test" passHref>
        <a style={{ opacity: 0, position: 'fixed', bottom: 0, left: 0, fontSize: '14px' }}>
          Go to test
        </a>
      </Link>
    </>
  );
}
