import React from 'react';

import { sharedValues } from 'utils/sharedValues';
import { ApplyScroll } from './useApplyScroll';

type UseTouchEvents = {
  useMomentum: React.MutableRefObject<boolean>;
  lastTouchX: React.MutableRefObject<number>;
  touchMomentum: React.MutableRefObject<number>;
  applyScroll: (value: ApplyScroll) => void;
};

export const useTouchEvents = (props: UseTouchEvents) => {
  const { useMomentum, lastTouchX, touchMomentum, applyScroll } = props;

  const onTouchStart = (event: TouchEvent) => {
    useMomentum.current = false;
    lastTouchX.current = event.touches[0].clientX;
  };

  const onTouchMove = (event: TouchEvent) => {
    const touchX = event.touches[0].clientX;
    const deltaX = touchX - lastTouchX.current;
    lastTouchX.current = touchX;

    touchMomentum.current *= sharedValues.motion.MOMENTUM_CARRY;
    touchMomentum.current += deltaX;

    applyScroll({ horizontalAmountPx: deltaX });
  };

  const onTouchEnd = () => {
    useMomentum.current = true;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
