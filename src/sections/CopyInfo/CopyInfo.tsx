import React from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './CopyInfo.styles';

export const CopyInfo = () => {
  return (
    <>
      <S.GithubWrapper>
        <LinkHandler isExternal elHref="https://github.com/javusScriptus/next-sandbox">
          <S.GithubLink>GitHub repo</S.GithubLink>
        </LinkHandler>
      </S.GithubWrapper>
      <S.AuthorWrapper>
        NextJS Sandbox by
        <LinkHandler isExternal elHref="https://creativeprojects.vercel.app/">
          <S.AuthorLink>Michal Zalobny</S.AuthorLink>
        </LinkHandler>
      </S.AuthorWrapper>
    </>
  );
};
