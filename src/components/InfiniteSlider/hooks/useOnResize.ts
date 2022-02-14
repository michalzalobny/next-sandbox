import React from 'react';
import { debounce } from 'lodash';
import { MotionValue } from 'framer-motion';
import { Group } from '@tweenjs/tween.js';

import { ProgressValues } from './useProgress';

type UseOnResize = {
  useMomentum: React.MutableRefObject<boolean>;
  TWEEN_GROUP_SEEK: React.MutableRefObject<Group>;
  offsetX: MotionValue<number>;
  getProgressValues: () => ProgressValues;
};

export const useOnResize = (props: UseOnResize) => {
  const { useMomentum, TWEEN_GROUP_SEEK, offsetX, getProgressValues } = props;

  const onResize = () => {
    TWEEN_GROUP_SEEK.current && TWEEN_GROUP_SEEK.current.removeAll();
    useMomentum.current = false;
    offsetX.set(getProgressValues().currentOffset);
  };

  const onResizeDebounced = debounce(() => onResize(), 200);

  return {
    onResize,
    onResizeDebounced,
  };
};
