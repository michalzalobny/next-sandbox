import { MotionValue } from 'framer-motion';
import React from 'react';
import { Group } from '@tweenjs/tween.js';

import { ProgressValues } from './useProgress';

type UseApplyScroll = {
  contentWidth: number;
  windowWidth: number;
  TWEEN_GROUP_SEEK: React.MutableRefObject<Group>;
  offsetX: MotionValue<number>;
  progressRatio: MotionValue<number>;
  getProgressValues: () => ProgressValues;
};

export type ApplyScroll = {
  horizontalAmountPx: number;
};

export const useApplyScroll = (props: UseApplyScroll) => {
  const { contentWidth, windowWidth, offsetX, progressRatio, TWEEN_GROUP_SEEK, getProgressValues } =
    props;

  const applyScroll = (props: ApplyScroll) => {
    TWEEN_GROUP_SEEK.current && TWEEN_GROUP_SEEK.current.removeAll();
    const { horizontalAmountPx } = props;

    applyScrollHorizontal(horizontalAmountPx);
  };

  const applyScrollHorizontal = (amountPx: number) => {
    if (contentWidth > windowWidth) {
      const newOffsetX = offsetX.get() + amountPx;

      offsetX.set(newOffsetX);
      progressRatio.set(getProgressValues().calculatedProgress);
    }
  };

  return {
    applyScroll,
  };
};
