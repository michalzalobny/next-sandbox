import React, { useEffect } from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './Layout.styles';

interface Props {
  isReady: boolean;
  children: React.ReactChild;
}

export const Layout = (props: Props) => {
  const { children, isReady } = props;

  useEffect(() => {
    if (isReady && !document.body.classList.contains('isReady')) {
      document.body.classList.add('isReady');
    }

    return () => {
      document.body.classList.remove('isReady');
    };
  }, [isReady]);

  return (
    <>
      <S.ReadyWrapper isReady={isReady}></S.ReadyWrapper>
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
      {children}
    </>
  );
};
