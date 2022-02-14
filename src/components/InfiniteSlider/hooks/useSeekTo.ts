import { MotionValue } from 'framer-motion';
import React from 'react';
import TWEEN, { Group } from '@tweenjs/tween.js';

import { ProgressValues } from './useProgress';

type UseSeekTo = {
  offsetX: MotionValue<number>;
  useMomentum: React.MutableRefObject<boolean>;
  progressRatio: MotionValue<number>;
  contentWidth: number;
  windowWidth: number;
  TWEEN_GROUP_SEEK: React.MutableRefObject<Group>;
  getProgressValues: () => ProgressValues;
};

export type SeekTo = {
  seekPxTablet: number;
  tabletOffset?: number;
};

export const useSeekTo = (props: UseSeekTo) => {
  const {
    progressRatio,
    offsetX,
    useMomentum,
    contentWidth,
    windowWidth,
    getProgressValues,
    TWEEN_GROUP_SEEK,
  } = props;

  const seekTo = (props: SeekTo) => {
    const { seekPxTablet, tabletOffset = 0 } = props;
    useMomentum.current = false;
    let totalSeekValue = seekPxTablet + tabletOffset + getProgressValues().paddedOffset;
    const boundary = contentWidth - windowWidth - getProgressValues().paddedOffset;

    // Always stay between current boundaries
    if (-totalSeekValue > boundary) {
      totalSeekValue = -boundary;
    } else if (-totalSeekValue < -getProgressValues().paddedOffset) {
      totalSeekValue = getProgressValues().paddedOffset;
    }

    new TWEEN.Tween({ offsetX: offsetX.get() }, TWEEN_GROUP_SEEK.current)
      .to({ offsetX: totalSeekValue }, 3000)
      .easing(TWEEN.Easing.Exponential.Out)
      .onUpdate(object => {
        offsetX.set(object.offsetX);
        progressRatio.set(getProgressValues().calculatedProgress);
      })
      .start();
  };
  return {
    seekTo,
  };
};
