import React, { useState } from 'react';
import { Box } from 'grommet';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { ShowcaseItem } from 'components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const bp1 = '48em';

const StyledCarousel = styled(Carousel)`
  @media only screen and (max-width: ${bp1}) {
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

  const [onCurrentSlide, setOnCurrentSlide] = useState(0);
  const [slides, setSlides] = useState({ current: 0, total: 0 });

  offsetY = Math.round(offsetY);
  const part = Math.round(availableScrolling / showcase.length);

  const { current, total } = slides;

  return (
    <Box as="main" className={`z-10 ${className}`} style={style}>
      <StyledCarousel
        className="w-full h-full"
        centerMode
        showThumbs={false}
        centerSlidePercentage={100}
        showStatus={true}
        statusFormatter={(current, total) => {
          setTimeout(() => {
            if (onCurrentSlide !== current) {
              setOnCurrentSlide(current);
              setSlides({ current, total });
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
      <div className="w-full text-center pt-1 pb-6 text-2xl">
        {current} / {total}
      </div>
    </Box>
  );
};
