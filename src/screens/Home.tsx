import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Grommet, Grid, Box, Layer, Image, Button } from 'grommet';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faUser,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ShowcaseCarousel, MouseScrollIcon } from 'components';
import { useScrollPosition } from 'hooks/useScrollPosition';
import { Portfolio } from 'screens';
import MyGrommetTheme from 'theme';
import showcase from 'showcase.json';

const CloseButton = styled(Button)`
  background-color: red;
  border-radius: 50%;
  margin: 0.5rem auto;
  &:active,
  &:focus {
    outline: none;
  }
`;

const showcaseModifier = 7;

class HomeClass extends Component<{ useScrollPosition: number[] }> {
  state = {
    availableScrolling: 0,
    currentSlide: 0,
    showPortfolioItem: false,
    currentInfo: {
      name: '',
      description: '',
      image: undefined,
    },
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

  openPortfolioItem = (showcase) => {
    let newState = { ...this.state, showPortfolioItem: true };
    if (showcase) {
      newState = { ...newState, currentInfo: showcase };
    }
    this.setState(newState);
  };

  closePortfolioItem = () => {
    this.setState({ ...this.state, showPortfolioItem: false, currentInfo: {} });
  };

  render() {
    const {
      currentSlide,
      availableScrolling,
      showPortfolioItem,
      currentInfo,
    } = this.state;
    const { useScrollPosition } = this.props;
    const [, , , offsetY] = useScrollPosition;

    return (
      <>
        <Grommet full theme={MyGrommetTheme}>
          {showPortfolioItem && (
            <Layer
              full
              animation="fadeIn"
              onEsc={() => this.closePortfolioItem()}
              onClickOutside={() => this.closePortfolioItem()}
              className="overflow-auto"
            >
              <Box margin="auto" style={{ maxWidth: 900 }}>
                <CloseButton onClick={() => this.closePortfolioItem()}>
                  <FontAwesomeIcon icon={faTimes} className="block m-auto" />
                </CloseButton>
                <Image
                  src={currentInfo ? currentInfo.image : undefined}
                  className="rounded-lg"
                />
                {currentInfo ? currentInfo && currentInfo.name : ''}
                {currentInfo ? currentInfo && currentInfo.description : ''}
              </Box>
            </Layer>
          )}
          <Grid
            fill="vertical"
            columns={['flex', '5rem']}
            className="w-full h-full fixed top-0"
          >
            <Box as="main" background="accent-1" fill responsive>
              <Grid rows={['xxsmall', 'flex']} fill="vertical">
                <Box
                  className="bg-transparent z-10"
                  as="header"
                  pad="small"
                  justify="center"
                  background="dark-4"
                >
                  <Link to="/">Kevin Do</Link>
                </Box>
                <Route exact path="/">
                  <ShowcaseCarousel
                    moveToSlide={this.moveToSlide}
                    currentSlide={currentSlide}
                    offsetY={offsetY}
                    availableScrolling={availableScrolling}
                    showcase={showcase}
                    openPortfolioItem={this.openPortfolioItem}
                  />
                </Route>
                <Route exact path="/portfolio">
                  <Portfolio
                    offsetY={offsetY}
                    availableScrolling={availableScrolling}
                    showcase={showcase}
                    openPortfolioItem={this.openPortfolioItem}
                  />
                </Route>
              </Grid>
            </Box>
            <Box as="nav" background="dark-3">
              <Grid rows={['xxsmall', 'flex', 'xxsmall']} fill>
                <Box pad="medium" justify="center" align="center">
                  <Link to="/portfolio">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </Link>
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
        />
      </>
    );
  }
}

export default function Home(props) {
  const uSP = useScrollPosition();
  return <HomeClass {...props} useScrollPosition={uSP} />;
}
