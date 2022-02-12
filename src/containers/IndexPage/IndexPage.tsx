import React from 'react';

import { Head } from 'seo/Head/Head';

import * as S from './IndexPage.styles';

export default function IndexPage() {
  const [isBlue, setIsBlue] = React.useState(false);

  React.useEffect(() => {
    console.log(isBlue);
  }, [isBlue]);

  return (
    <>
      <Head />

      <S.Wrapper onClick={() => setIsBlue(prev => !prev)} isBlue={isBlue}>
        <S.MainWrapper>Main</S.MainWrapper>
        <S.Title>The title</S.Title>
      </S.Wrapper>
    </>
  );
}
