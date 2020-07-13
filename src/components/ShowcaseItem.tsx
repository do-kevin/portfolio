import React, { useState, useEffect, Component } from 'react';
import { Box, Image } from 'grommet';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { render } from '@testing-library/react';

class ShowcaseItem extends Component<{
  index: any;
  offsetY: any;
  part: any;
  item: any;
  moveToSlide: any;
  showcaseLength: any;
}> {
  state = {
    alreadyMoved: false,
  };

  render() {
    const {
      index,
      offsetY,
      part,
      item,
      moveToSlide,
      showcaseLength,
    } = this.props;
    const { alreadyMoved } = this.state;

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
        this.setState({ ...this.state, alreadyMoved: true });
      }
    } else {
      if (alreadyMoved) {
        this.setState({ ...this.state, alreadyMoved: false });
      }
    }
    return (
      <Box
        justify="center"
        key={'showcaseItem__' + index}
        as="div"
        style={{ maxWidth: '30rem', height: '25rem' }}
        className={
          offsetY >= minThreshold && offsetY <= maxThreshold
            ? 'fade-in'
            : 'fade-out'
        }
      >
        <figure
          style={{ height: 'auto' }}
          className={`${
            offsetY >= minThreshold && offsetY <= maxThreshold ? 'test' : ''
          } mb-4 rounded`}
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
  }
}

export default ShowcaseItem;
