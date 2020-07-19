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
    onClick,
    className,
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
      basis="auto"
      onClick={onClick}
      className={`showcaseItem ${
        display ? 'fade-in' : 'fade-out'
      } mx-2 ${className}`}
      justify="center"
      as="div"
    >
      <figure className="shadow-lg rounded showcaseItem__figure">
        <Image
          className="rounded showcaseItem__image"
          fit="contain"
          src={item.image}
        />
      </figure>
      <Box
        as="footer"
        direction="row"
        justify="center"
        align="center"
        pad="small"
      >
        <Box className="text-3xl font-bold text-left leading-none text-center">
          {item.name}
        </Box>
      </Box>
    </Box>
  );
};

export default ShowcaseItem;
