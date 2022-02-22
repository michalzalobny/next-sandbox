import React, { useEffect, useRef, useState } from 'react';
import { Variants } from 'framer-motion';

import { useElementSize } from 'hooks/useElementSize';
import { tween2 } from 'components/Animations/framerTransitions';

import * as S from './ExpandWrapper.styles';

interface Props {
  children: React.ReactNode;
  isExpanded: boolean;
}

const contentWrapperV: Variants = {
  initial: {
    height: 0,
    overflow: 'hidden',
  },
  animate: (height: number) => {
    return {
      height: height,
      transitionEnd: {
        overflow: 'initial',
      },
    };
  },
};

export const ExpandWrapper = (props: Props) => {
  const { isExpanded, children } = props;
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
      <S.Wrapper>
        <S.GhostWrapper ref={ghostRef}>{children}</S.GhostWrapper>
        <S.ContentWrapper
          initial="initial"
          animate={isExpanded && expandHeight !== 0 ? 'animate' : 'initial'}
          variants={contentWrapperV}
          custom={expandHeight}
          transition={tween2}
        >
          {children}
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};
