import React from 'react';
import { MotionValue } from 'framer-motion';

import { calculateProgress } from '../functions/calculateProgress';
import { getPaddedOffset } from '../functions/getPaddedOffset';
import { retrieveCurrentOffset } from '../functions/retrieveCurrentOffset';

type UseProgress = {
  progressRatio: MotionValue<number>;
  contentWidth: number;
  offsetX: MotionValue<number>;
};

export interface ProgressValues {
  calculatedProgress: number;
  paddedOffset: number;
  currentOffset: number;
}

export const useProgress = (props: UseProgress) => {
  const { progressRatio, contentWidth, offsetX } = props;

  const getProgressValues = (): ProgressValues => {
    const progressLimit = contentWidth;
    const calculatedProgress = calculateProgress(offsetX.get(), progressLimit);
    const paddedOffset = getPaddedOffset(progressRatio.get(), progressLimit);
    const currentOffset = retrieveCurrentOffset(progressRatio.get(), progressLimit);

    return {
      calculatedProgress,
      paddedOffset,
      currentOffset,
    };
  };

  return { getProgressValues };
};
