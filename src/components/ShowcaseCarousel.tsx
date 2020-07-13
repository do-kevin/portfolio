import React from 'react';
import { Box } from 'grommet';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { ShowcaseItem } from 'components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StyledCarousel = styled(Carousel)`
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

const ShowcaseCarousel = (props) => {
  let {
    showcase,
    availableScrolling,
    offsetY,
    moveToSlide,
    currentSlide,
  } = props;

  offsetY = Math.round(offsetY);
  const part = Math.round(availableScrolling / showcase.length);

  return (
    <Box as="main" background="dark-1" className="z-10">
      <StyledCarousel
        className="w-full h-full"
        centerMode
        showThumbs={false}
        centerSlidePercentage={100}
        showStatus={false}
        selectedItem={currentSlide}
        showArrows={false}
        emulateTouch={false}
        showIndicators={false}
        swipeable={false}
      >
        {showcase.map((item, index) => {
          return (
            <ShowcaseItem
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
    </Box>
  );
};

export default ShowcaseCarousel;
