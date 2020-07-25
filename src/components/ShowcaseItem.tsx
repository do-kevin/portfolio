import React, { useState, useEffect } from 'react';
import { Box } from 'grommet';
import Img from 'react-cool-img';
import styled from 'styled-components';
import {
  mqMin1,
  mqMin2,
  mqMin3,
  mqMaxHeight1,
  mqMaxHeight0,
  mqMaxHeight2,
} from 'constants/mediaQueries';
import _showcase from 'showcase.json';
import LoadingImg from 'assets/gifs/gradientLoading.gif';

const CarouselBox = styled(Box).attrs((props: any) => {
  return {
    className: `showcaseItem rounded mx-2 hover:text-secondary-theme-1 transition duration-200 ease-in-out text-center ${
      props ? '' : ''
    }`,
  };
})`
  transition: width 200ms;
  @media ${mqMin1} {
    width: 40rem;
  }
  @media ${mqMin2} {
    width: 50rem;
  }
  @media ${mqMin3} {
    width: 60rem;
  }
  @media ${mqMaxHeight1} {
    width: 30rem;
  }
  @media ${mqMaxHeight0} {
    width: 25rem;
  }
  @media ${mqMaxHeight2} {
    width: 23rem;
  }

  .showcaseItem {
    &__figure {
      height: 100%;
      width: 100%;
    }
    &__name {
      @media ${mqMaxHeight2} {
        font-size: 1rem !important;
      }
      @media ${mqMaxHeight0} {
        font-size: 1.5rem;
      }
      @media ${mqMaxHeight1} {
        font-size: 1.875rem;
      }
    }
  }
`;

const modifier = 17 * ((_showcase && _showcase.length) || 0);
const bph1 = modifier;
const mqh1 = `only screen and (max-height: ${bph1}em)`;

const ListBox = styled(Box).attrs((props: any) => {
  return {
    className: `showcaseItem rounded mx-auto hover:text-secondary-theme-1 transition duration-200 ease-in-out text-center ${
      props ? '' : ''
    }`,
  };
})`
  @media ${mqh1} {
    padding: 0 0.5rem;
    width: 100%;
  }

  .showcaseItem {
    &__figure {
      height: 100%;
      width: 100%;
    }
    &__name {
      @media ${mqh1} {
        font-size: 90%;
      }
    }
  }
`;

const ShowcasePreview = (props: any) => {
  const { showcase } = props;
  const { image, name } = showcase;
  return (
    <>
      <figure className="shadow-lg rounded showcaseItem__figure">
        <Img
          placeholder={LoadingImg}
          src={image || undefined}
          className={`object-contain rounded showcaseItem__image`}
          alt={name + ' image'}
        />
      </figure>
      <Box
        as="footer"
        direction="row"
        justify="center"
        align="center"
        pad="small"
      >
        <Box className="text-4xl leading-none text-center font-titilliumWeb showcaseItem__name">
          {name || ''}
        </Box>
      </Box>
    </>
  );
};

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
    type = 'carousel',
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

  if (type === 'carousel') {
    return (
      <CarouselBox
        basis="auto"
        onClick={onClick}
        justify="center"
        className={`${
          display ? 'fade-in animation-500ms' : 'fade-out animation-1s'
        } ${props.className || ''}`}
      >
        <ShowcasePreview showcase={item} />
      </CarouselBox>
    );
  } else if (type === 'list') {
    return (
      <ListBox
        basis="auto"
        onClick={onClick}
        justify="center"
        className={`${
          display ? 'fade-in animation-500ms' : 'fade-out animation-1s'
        } ${props.className || ''}`}
      >
        <ShowcasePreview showcase={item} />
      </ListBox>
    );
  } else {
    return null;
  }
};
