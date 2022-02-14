import { breakpoints } from 'utils/media';

export const renderBreakpoints = [
  {
    minWindowWidth: 0,
    itemsRendered: 1,
    padding: 0.12,
    isPaddingRelative: true,
  },
  {
    minWindowWidth: breakpoints.tablet,
    itemsRendered: 2,
    padding: 15,
    isPaddingRelative: false,
  },
  {
    minWindowWidth: breakpoints.desktop,
    itemsRendered: 3,
    padding: 15,
    isPaddingRelative: false,
  },
];

export const itemSizeSSR = {
  elWidth: 1,
  elPadding: 1,
};

export const wheelMultiplier = 1;
export const mouseMultiplier = 2;
export const touchMultiplier = 2;
