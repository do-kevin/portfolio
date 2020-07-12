import React, { useState } from 'react';
import { Box, Image } from 'grommet';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ShowcaseItem = (props) => {
  const { index, offsetY, part, item, moveToSlide, showcaseLength } = props;
  const [alreadyMoved, setAlreadyMoved] = useState(false);

  const target = index * part;
  const threshold = target ? target * 0.1 : 0;
  let maxThreshold = part ? Math.round(target + threshold) : 0;
  let minThreshold = 0;

  if (target !== 0) {
    minThreshold = Math.round(target - threshold);
  }

  if (index === 0) {
    maxThreshold = Math.round(part * 0.8 + threshold);
  }

  if (index === 1) {
    minThreshold = Math.round(minThreshold - minThreshold * 0.1);
    maxThreshold = Math.round(maxThreshold + maxThreshold * 0.6);
  }

  if (showcaseLength && index === showcaseLength - 1) {
    maxThreshold = Math.round(maxThreshold + maxThreshold * 0.52);
  }

  if (offsetY >= minThreshold && offsetY <= maxThreshold) {
    if (!alreadyMoved) {
      moveToSlide(index);
      setAlreadyMoved(true);
    }
  } else {
    if (alreadyMoved) {
      setAlreadyMoved(false);
    }
  }

  return (
    <Box
      justify="center"
      key={'showcaseItem__' + index}
      as="div"
      style={{ maxWidth: '30rem', height: '25rem' }}
    >
      <figure style={{ height: 'auto' }} className="shadow-lg mb-4 rounded">
        <Image
          className="rounded"
          fit="cover"
          src={'https://i.imgur.com/xyiNfa9.png'}
        />
      </figure>
      <Box as="footer" direction="row" justify="between">
        <Box
          className="text-3xl font-bold text-left leading-none"
          background={
            offsetY >= minThreshold && offsetY <= maxThreshold
              ? 'status-ok'
              : 'status-critical'
          }
        >
          {item.name}
        </Box>
        <Box direction="row" className="text-gray-400">
          <span>REACT</span>
          <span>SCSS</span>
        </Box>
      </Box>
      <Box>
        {minThreshold} to {maxThreshold}
      </Box>
    </Box>
  );
};

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
  let { showcase, availableScrolling, offsetY } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  offsetY = Math.round(offsetY);
  const part = Math.round(availableScrolling / showcase.length);

  const moveToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Box as="main" background="dark-1">
      <StyledCarousel
        centerMode
        showThumbs={false}
        centerSlidePercentage={100}
        showArrows={true}
        className="w-full h-full"
        emulateTouch={true}
        showStatus={false}
        selectedItem={currentSlide}
      >
        {showcase.map((item, index) => {
          return (
            <ShowcaseItem
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
