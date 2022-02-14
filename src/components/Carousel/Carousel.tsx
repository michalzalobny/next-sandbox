import React, { memo, useRef, useState, useEffect } from 'react';
import { AnimatePresence, PanInfo } from 'framer-motion';
import { useWindowSize } from 'hooks/useWindowSize';

import { swipePower } from 'utils/functions/swipePower';
import * as S from './Carousel.styles';
import { variants } from './Carousel.motion';

interface CarouselProps {
  items: React.ReactElement[];
  paginate: (newDirection: number) => void;
  currentIndex: number;
  direction: number;
  page: number;
}

const SWIPIE_CONFIDENCE_THRESHOLD = 10000;

const spring = {
  stiffness: 80,
  damping: 15,
  restDelta: 0.01,
};

export const Carousel = memo<CarouselProps>(props => {
  const { page, direction, currentIndex, paginate, items } = props;
  const [activeElHeight, setActiveElHeight] = useState(1);
  const [show, setShow] = useState(false);
  const { windowSize } = useWindowSize();

  const handleDragEnd = ({ offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -SWIPIE_CONFIDENCE_THRESHOLD) {
      paginate(1);
    } else if (swipe > SWIPIE_CONFIDENCE_THRESHOLD) {
      paginate(-1);
    }
  };

  const activeElRef = useRef<HTMLDivElement | null>(null);

  const handleActiveElRef = (el: HTMLDivElement | null) => {
    if (el === null) return;
    activeElRef.current = el;
    setActiveElHeight(activeElRef.current.clientHeight);
  };

  //handles window resize
  useEffect(() => {
    if (activeElRef.current === null) return;
    setActiveElHeight(activeElRef.current.clientHeight);
  }, [windowSize]);

  useEffect(() => {
    //Shows the carousel only if it got its full height
    setShow(true);
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.ItemsContainer show={show} style={{ height: activeElHeight }}>
          <AnimatePresence initial={false} custom={direction}>
            <S.Item
              key={page}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                x: { type: 'spring', ...spring },
                opacity: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragTransition={{
                bounceStiffness: spring.stiffness,
                bounceDamping: spring.damping,
                restDelta: spring.restDelta,
              }}
              dragElastic={1}
              onDragEnd={(_e, panInfo) => handleDragEnd(panInfo)}
            >
              <div ref={el => handleActiveElRef(el)}>{items[currentIndex]}</div>
            </S.Item>
          </AnimatePresence>
        </S.ItemsContainer>
      </S.Wrapper>
    </>
  );
});

Carousel.displayName = 'Carousel';
