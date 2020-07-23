import React, { useState, useEffect } from 'react';
import { Box, Image } from 'grommet';
import styled from 'styled-components';

const bp1 = '48em'; // 768px
const bp2 = '160em'; // 2560px
const bp3 = '240em'; // 3840px

const mq1 = `only screen and (min-width: ${bp1})`;
const mq2 = `only screen and (min-width: ${bp2})`;
const mq3 = `only screen and (min-width: ${bp3})`;

const StyledBox = styled(Box).attrs((props: any) => {
  return {
    className: `showcaseItem rounded mx-2 hover:text-secondary-theme-1 transition duration-200 ease-in-out text-center ${
      props ? '' : ''
    }`,
  };
})`
  @media ${mq1} {
    width: 40rem;
  }
  @media ${mq2} {
    width: 50rem;
  }
  @media ${mq3} {
    width: 60rem;
  }

  .showcaseItem {
    &__figure {
      height: 100%;
      width: 100%;
    }
  }
`;

export const ShowcaseItem = (props: any) => {
  const {
    index,
    offsetY,
    part,
    item,
    moveToSlide,
    showcaseLength,
    currentSlide,
    onClick,
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
    <StyledBox
      basis="auto"
      onClick={onClick}
      justify="center"
      className={`${
        display ? 'fade-in animation-500ms' : 'fade-out animation-1s'
      } ${props.className || ''}`}
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
        <Box className="text-4xl leading-none text-center font-titilliumWeb">
          {item.name}
        </Box>
      </Box>
    </StyledBox>
  );
};
