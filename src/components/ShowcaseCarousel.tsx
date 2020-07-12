import React from 'react';
import { Box, Image } from 'grommet';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
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
  const { showcase } = props;
  const rem = '30rem';
  return (
    <Box as="main" background="dark-1">
      <StyledCarousel
        centerMode
        centerSlidePercentage={100}
        showArrows={true}
        className="w-full h-full"
        emulateTouch={true}
        showStatus={false}
      >
        {showcase.map((item, index) => {
          return (
            <Box
              justify="center"
              key={'showcaseItem__' + index}
              as="div"
              style={{ maxWidth: rem, height: '25rem' }}
            >
              <figure
                style={{ height: 'auto' }}
                className="shadow-lg mb-4 rounded"
              >
                <Image
                  className="rounded"
                  fit="cover"
                  src={'https://i.imgur.com/xyiNfa9.png'}
                />
              </figure>
              <Box as="footer" direction="row" justify="between">
                <Box className="text-3xl font-bold text-left leading-none">
                  {item.name}
                </Box>
                <Box direction="row" className="text-gray-400">
                  <span>REACT</span>
                  <span>SCSS</span>
                </Box>
              </Box>
            </Box>
          );
        })}
      </StyledCarousel>
    </Box>
  );
};

export default ShowcaseCarousel;
