import React, { useState, useEffect } from 'react';
import { Box } from 'grommet';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { ShowcaseItem } from 'components';
import { mqMax1, mqMaxHeight2 } from 'constants/mediaQueries';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StyledCarousel = styled(Carousel)`
  @media ${mqMax1} {
    display: none;
  }
  .carousel.carousel-slider {
    height: 100%;
  }
  .carousel.carousel-slider .slider-wrapper,
  .carousel.carousel-slider .slider-wrapper .slider {
    height: 100%;
    background: none;
  }
  .carousel.carousel-slider .slider-wrapper .slider .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: none;
  }
`;

const StyledCounter = styled.div.attrs({
  className:
    'counter w-full text-center pt-1 pb-6 text-2xl text-quaternary-theme-1',
})`
  @media ${mqMax1} {
    display: none;
  }
  @media ${mqMaxHeight2} {
    padding-top: 0;
    font-size: 1rem;
  }
`;

const Counter = (props) => {
  const { current, total } = props;

  useEffect(() => {}, [current, total]);

  return (
    <StyledCounter>
      {current} / {total}
    </StyledCounter>
  );
};

export const ShowcaseCarousel = (props) => {
  let {
    showcase,
    availableScrolling,
    offsetY,
    moveToSlide,
    currentSlide,
    openPortfolioItem,
    className,
    style,
  } = props;

  const [currSlide, setCurrSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  offsetY = Math.round(offsetY);
  const part = Math.round(availableScrolling / showcase.length);

  return (
    <Box as="main" className={`z-10 ${className}`} style={style}>
      <StyledCarousel
        className="w-full h-full"
        centerMode
        showThumbs={false}
        centerSlidePercentage={100}
        showStatus={true}
        statusFormatter={(_current, _total) => {
          setTimeout(() => {
            if (_current !== currSlide) {
              setCurrSlide(_current);
            }
            if (_total !== totalSlides) {
              setTotalSlides(_total);
            }
          }, 50);
          return '';
        }}
        selectedItem={currentSlide}
        showArrows={false}
        emulateTouch={false}
        showIndicators={false}
        swipeable={false}
      >
        {showcase.map((item, index) => {
          return (
            <ShowcaseItem
              type="carousel"
              onClick={() => openPortfolioItem(item)}
              currentSlide={currentSlide}
              key={'showcaseItem__' + index}
              item={item}
              index={index}
              offsetY={offsetY}
              part={part}
              moveToSlide={moveToSlide}
              showcaseLength={showcase.length}
            />
          );
        })}
      </StyledCarousel>
      <Counter current={currSlide} total={totalSlides} />
    </Box>
  );
};

export default React.memo(ShowcaseCarousel);
