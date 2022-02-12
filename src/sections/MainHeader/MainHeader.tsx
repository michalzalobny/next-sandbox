import React from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './MainHeader.styles';

export const MainHeader = () => {
  return (
    <>
      <S.Header>
        <S.Title>
          NextJS <span>Sandbox</span>
        </S.Title>
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
    </>
  );
};
