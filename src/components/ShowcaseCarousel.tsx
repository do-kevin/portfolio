import React from 'react';
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

const ShowcaseCarousel = (props) => {
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

  offsetY = Math.round(offsetY);
  const part = Math.round(availableScrolling / showcase.length);

  return (
    <Box
      as="main"
      background="dark-1"
      className={`z-10 ${className}`}
      style={style}
    >
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
    </Box>
  );
};

export default ShowcaseCarousel;
