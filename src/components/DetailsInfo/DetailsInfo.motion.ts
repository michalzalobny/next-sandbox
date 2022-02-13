import { springSlow } from 'components/Animations/framerTransitions';

const slideSize = '30vw';

export const slide = {
  variants: {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? slideSize : `-${slideSize}`,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? slideSize : `-${slideSize}`,
        opacity: 0,
      };
    },
  },
  transition: {
    ...springSlow,
  },
};
