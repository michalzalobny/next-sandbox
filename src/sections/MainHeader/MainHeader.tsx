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
          All custom components I have made and constantly trying to improve 🚀. I use them mostly
          in my React applications, but all of them might be easily transfered and used with pure
          css and js.
        </S.Description>
      </S.Header>
    </>
  );
};
