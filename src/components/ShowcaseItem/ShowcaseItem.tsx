import React, { useState, useEffect } from 'react';
import { Box, Image } from 'grommet';
import './ShowcaseItem.scss';

const ShowcaseItem = (props) => {
  const {
    index,
    offsetY,
    part,
    item,
    moveToSlide,
    showcaseLength,
    currentSlide,
  } = props;
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    let alreadyMoved = false;
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
        alreadyMoved = true;
        setDisplay(true);
      }
    } else {
      if (alreadyMoved) {
        alreadyMoved = false;
        setDisplay(false);
      }
    }

    if (currentSlide === index) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [
    offsetY,
    currentSlide,
    showcaseLength,
    index,
    part,
    moveToSlide,
    display,
  ]);

  return (
    <Box
      className={`showcaseItem ${display ? 'fade-in' : 'fade-out'}`}
      justify="center"
      as="div"
    >
      <figure
        style={{ height: 'auto', maxWidth: '25rem' }}
        className="shadow-lg mb-4 rounded"
      >
        <Image
          className="rounded"
          fit="cover"
          src={'https://i.imgur.com/xyiNfa9.png'}
        />
      </figure>
      <Box as="footer" direction="row" justify="between">
        <Box
          className="text-3xl font-bold text-left leading-none"
          background={display ? 'status-ok' : 'status-critical'}
        >
          {item.name}
        </Box>
        <Box direction="row" className="text-gray-400">
          <span>REACT</span>
          <span>SCSS</span>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowcaseItem;
