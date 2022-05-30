import React from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './CopyInfo.styles';

interface Props {
  inspirationName?: string;
  inspirationHref?: string;
  repoHref?: string;
}

export const CopyInfo = (props: Props) => {
  const {
    repoHref = 'https://github.com/javusScriptus/next-sandbox',
    inspirationHref,
    inspirationName,
  } = props;

  return (
    <>
      <S.GithubWrapper>
        <LinkHandler isExternal elHref={repoHref}>
          <S.GithubLink>GitHub repo</S.GithubLink>
        </LinkHandler>
      </S.GithubWrapper>
      <S.AuthorWrapper>
        NextJS sandbox by
        <LinkHandler isExternal elHref="https://creativeprojects.vercel.app/">
          <S.AuthorLink>Michal Zalobny</S.AuthorLink>
        </LinkHandler>
      </S.AuthorWrapper>

      {inspirationName && (
        <S.InspirationWrapper>
          Inspired by
          <LinkHandler isExternal elHref={inspirationHref}>
            <S.InspirationLink>{inspirationName}</S.InspirationLink>
          </LinkHandler>
        </S.InspirationWrapper>
      )}
    </>
  );
};
