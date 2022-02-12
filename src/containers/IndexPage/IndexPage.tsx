import React from 'react';

import { Head } from 'seo/Head/Head';
import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './IndexPage.styles';

export default function IndexPage() {
  return (
    <>
      <Head />
      <S.Wrapper>
        <S.Header>
          <S.Title>NextJS Sandbox</S.Title>
          <S.AuthorWrapper>
            <LinkHandler isExternal elHref="https://github.com/javusScriptus">
              <S.GithubLink>javusScriptus</S.GithubLink>
            </LinkHandler>
            <S.Separator />
            <LinkHandler isExternal elHref="https://creativeprojects.vercel.app/">
              <S.AuthorLink>Michal Zalobny</S.AuthorLink>
            </LinkHandler>
          </S.AuthorWrapper>
          <S.Description>
            NextJS Sandbox is a place with all custom components made in ReactJS and Framer Motion,
            that I use and maintain on regular basis.
          </S.Description>
        </S.Header>
      </S.Wrapper>
    </>
  );
}
