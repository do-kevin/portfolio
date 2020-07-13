import React, { Component } from 'react';
import { Grommet, grommet, Grid, Box } from 'grommet';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { ShowcaseCarousel, MouseScrollIcon } from 'components';
import { useScrollPosition } from 'hooks/useScrollPosition';
import showcase from 'showcase.json';

const showcaseModifier = 7;

class HomeClass extends Component<{ useScrollPosition: number[] }> {
  state = {
    availableScrolling: 0,
    currentSlide: 0,
  };

  moveToSlide = (index: number) => {
    this.setState({ ...this.state, currentSlide: index });
  };

  componentDidMount() {
    scroll.scrollToTop();
    const scrollHeight = document.body.scrollHeight;

    let scrollArea =
      (scrollHeight * (showcase.length * showcaseModifier)) / 69 - 9;
    scrollArea = Math.round(scrollArea);

    this.setState(
      Object.assign(this.state, {
        availableScrolling: scrollArea,
      })
    );
  }

  render() {
    const { currentSlide, availableScrolling } = this.state;
    const { useScrollPosition } = this.props;
    const [, , , offsetY] = useScrollPosition;

    return (
      <>
        <Grommet full theme={grommet}>
          <Grid
            fill="vertical"
            columns={['flex', '5rem']}
            className="w-full h-full fixed top-0"
          >
            <Box as="main" background="accent-1" fill responsive>
              <Grid rows={['xxsmall', 'flex']} fill="vertical">
                <Box
                  className="bg-transparent"
                  as="header"
                  pad="small"
                  justify="center"
                >
                  Kevin Do
                </Box>
                <ShowcaseCarousel
                  moveToSlide={this.moveToSlide}
                  currentSlide={currentSlide}
                  offsetY={offsetY}
                  availableScrolling={availableScrolling}
                  showcase={showcase}
                />
              </Grid>
            </Box>
            <Box as="nav" background="dark-3">
              <Grid rows={['xxsmall', 'flex', 'xxsmall']} fill>
                <Box pad="medium" justify="center" align="center">
                  <FontAwesomeIcon icon={faBriefcase} />
                </Box>
                <Box justify="center" align="center">
                  <MouseScrollIcon />
                </Box>
                <Box justify="center" align="center">
                  <FontAwesomeIcon icon={faUser} />
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grommet>
        <Box
          style={{
            height:
              showcase && showcase.length
                ? `${showcase.length * showcaseModifier}rem`
                : 0,
          }}
          className="w-2"
        ></Box>
      </>
    );
  }
}

export default function Home(props) {
  const uSP = useScrollPosition();
  return <HomeClass {...props} useScrollPosition={uSP} />;
}
