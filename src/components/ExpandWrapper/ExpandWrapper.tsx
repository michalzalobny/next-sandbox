import React, { useEffect, useRef, useState } from 'react';

import { useElementSize } from 'hooks/useElementSize';

import * as S from './ExpandWrapper.styles';

export interface ExpandWrapperProps {
  children: React.ReactNode;
  isExpanded: boolean;
}

export const ExpandWrapper = (props: ExpandWrapperProps) => {
  const { isExpanded, children, ...rest } = props;
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const ghostSize = useElementSize(ghostRef);

  const [expandHeight, setExpandHeight] = useState(0);

  useEffect(() => {
    if (!ghostRef.current || !ghostSize.size.isReady) return;

    if (isExpanded) {
      setExpandHeight(ghostSize.size.clientRect.height);
    } else {
      setExpandHeight(0);
    }
  }, [ghostSize.size.clientRect.height, ghostSize.size.isReady, isExpanded]);

  return (
    <>
      <S.Wrapper {...rest}>
        <S.GhostWrapper ref={ghostRef}>{children}</S.GhostWrapper>
        <S.ContentWrapper style={{ height: expandHeight }}>{children}</S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};
