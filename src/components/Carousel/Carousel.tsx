import React, { memo, useRef, useState, useEffect } from 'react';
import { AnimatePresence, PanInfo } from 'framer-motion';

import { useWindowSize } from 'hooks/useWindowSize';
import { swipePower } from 'utils/functions/swipePower';
import { wrap } from 'utils/functions/wrap';

import * as S from './Carousel.styles';
import { variants } from './Carousel.motion';
import { SWIPIE_CONFIDENCE_THRESHOLD, spring } from './Carousel.settings';
import { ButtonsProps } from './Carousel.types';

interface CarouselProps {
  Buttons: (props: ButtonsProps) => JSX.Element;
  carouselItems: JSX.Element[];
}

export const Carousel = memo<CarouselProps>(props => {
  const { carouselItems, Buttons } = props;
  const [activeElHeight, setActiveElHeight] = useState(1);
  const [show, setShow] = useState(false);
  const { windowSize } = useWindowSize();
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = wrap(0, carouselItems.length, page);
  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

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
      <Buttons paginate={paginate} />
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
              <div ref={el => handleActiveElRef(el)}>
                {React.cloneElement(carouselItems[currentIndex], { direction })}
              </div>
            </S.Item>
          </AnimatePresence>
        </S.ItemsContainer>
      </S.Wrapper>
    </>
  );
});

Carousel.displayName = 'Carousel';
