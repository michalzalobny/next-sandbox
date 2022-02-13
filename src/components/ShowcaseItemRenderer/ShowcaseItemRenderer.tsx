import React from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './ShowcaseItemRenderer.styles';

interface Props {
  title: string;
  children: React.ReactChild;
  sourceHref: string;
}

export const ShowcaseItemRenderer = (props: Props) => {
  const { sourceHref, title, children } = props;
  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.Divider />
          <S.LinkWrapper>
            <LinkHandler isExternal elHref={sourceHref}>
              <S.GithubLink>view source</S.GithubLink>
            </LinkHandler>
          </S.LinkWrapper>
        </S.TitleWrapper>

        {children}
      </S.Wrapper>
    </>
  );
};
