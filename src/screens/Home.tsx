import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Grommet, Grid, Box, Layer, Image, Button } from 'grommet';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ShowcaseCarousel, MouseScrollIcon, ShowcaseList } from 'components';
import { useScrollPosition, useIsScrolling } from 'hooks';
import { Portfolio } from 'screens';
import { theme as MyGrommetTheme } from 'theme';
import showcase from 'showcase.json';
import { About } from './About';
import { colors } from 'theme';

const CloseButton = styled(Button)`
  background-color: gray;
  border-radius: 50%;
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  padding: 0.8rem 1rem;
  &:active,
  &:focus {
    outline: none;
  }
`;

const showcaseModifier = 7;

class HomeClass extends Component<{
  useScrollPosition: number[];
  location: any;
  useIsScrolling: boolean[];
}> {
  state = {
    availableScrolling: 0,
    currentSlide: 0,
    showPortfolioItem: false,
    currentInfo: {
      name: '',
      description: '',
      image: undefined,
      technology: [],
    },
  };

  moveToSlide = (index: number) => {
    this.setState({ ...this.state, currentSlide: index });
  };

  componentDidMount() {
    scroll.scrollToTop();
    const scrollHeight = document.body.scrollHeight;

    let scrollArea = (scrollHeight * (showcase.length * showcaseModifier)) / 60;
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
    const { useScrollPosition, useIsScrolling, location } = this.props;
    const { pathname } = location;
    const [, , , offsetY] = useScrollPosition;
    const [isScrolling] = useIsScrolling;

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
              <Box
                margin="auto"
                direction="column"
                style={{ maxWidth: 900 }}
                className="pb-4"
                fill
              >
                <CloseButton onClick={() => this.closePortfolioItem()}>
                  <FontAwesomeIcon icon={faTimes} className="block m-auto" />
                </CloseButton>
                <span className="block text-6xl font-bold my-12 text-center leading-tight">
                  {currentInfo ? currentInfo && currentInfo.name : ''}
                </span>
                <Image
                  fit="contain"
                  src={currentInfo ? currentInfo.image : undefined}
                  className="rounded-lg mb-4 shadow-md"
                  style={{ minHeight: 563 }}
                />
                <Grid
                  fill="vertical"
                  columns={['flex', 'auto']}
                  gap="small"
                  className="pb-6"
                >
                  <Box
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: 'rgba(1, 0, 15, 0.8)',
                    }}
                  >
                    {currentInfo && currentInfo.description && (
                      <>
                        <span className="text-gray-500">Description</span>
                        <p>{currentInfo.description}</p>
                      </>
                    )}
                  </Box>
                  <Box
                    align="end"
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: 'rgba(1, 0, 15, 0.8)',
                    }}
                  >
                    <span className="text-gray-500">Technologies used</span>
                    <ul className="text-right">
                      {currentInfo &&
                        currentInfo.technology &&
                        currentInfo.technology.length &&
                        currentInfo.technology.map((t) => <li>{t}</li>)}
                    </ul>
                  </Box>
                </Grid>
              </Box>
            </Layer>
          )}
          <Grid
            fill="vertical"
            columns={['flex', '5rem']}
            className="w-full h-full fixed top-0"
          >
            <Box as="main" fill background="primary-theme-1">
              <Grid rows={['flex']} fill="vertical">
                <Route exact path="/">
                  <>
                    <ShowcaseList
                      showcase={showcase}
                      offsetY={offsetY}
                      openPortfolioItem={this.openPortfolioItem}
                    />
                    <ShowcaseCarousel
                      moveToSlide={this.moveToSlide}
                      currentSlide={currentSlide}
                      offsetY={offsetY}
                      availableScrolling={availableScrolling}
                      showcase={showcase}
                      openPortfolioItem={this.openPortfolioItem}
                    />
                  </>
                </Route>
                <Route exact path="/portfolio">
                  <Portfolio
                    offsetY={offsetY}
                    availableScrolling={availableScrolling}
                    showcase={showcase}
                    openPortfolioItem={this.openPortfolioItem}
                  />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
              </Grid>
            </Box>
            <Box
              as="nav"
              background="primary-theme-2"
              border={{
                color: 'quaternary-theme-1',
                side: 'left',
                size: 'xsmall',
                style: 'solid',
              }}
            >
              <Grid rows={['xsmall', 'flex', 'xsmall']} fill>
                <Box justify="center" align="center">
                  <NavLink
                    exact
                    to="/"
                    className="text-white w-full h-full flex justify-center items-center text-3xl focus:shadow-outline"
                    activeStyle={{ color: colors['secondary-theme-1'] }}
                  >
                    KD
                  </NavLink>
                </Box>
                <Box justify="center" align="center">
                  <NavLink
                    exact
                    to="/about"
                    className="text-white w-full py-4 flex justify-center items-center text-3xl focus:shadow-outline"
                    activeStyle={{ color: colors['secondary-theme-1'] }}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </NavLink>
                  <MouseScrollIcon
                    style={{ height: '3em' }}
                    isScrolling={isScrolling}
                  />
                  <NavLink
                    exact
                    to="/portfolio"
                    className="text-white w-full py-4 flex justify-center items-center text-3xl focus:shadow-outline"
                    activeStyle={{ color: colors['secondary-theme-1'] }}
                  >
                    <FontAwesomeIcon icon={faBriefcase} />
                  </NavLink>
                </Box>
                <Box justify="center" align="center"></Box>
              </Grid>
            </Box>
          </Grid>
        </Grommet>
        {(pathname === '/' || pathname === '/portfolio') && (
          <Box
            style={{
              height:
                showcase && showcase.length
                  ? `${showcase.length * showcaseModifier}rem`
                  : 0,
            }}
            className="w-2"
          />
        )}
      </>
    );
  }
}

export function Home(props) {
  const uSP = useScrollPosition();
  const uIS = useIsScrolling();
  return <HomeClass {...props} useScrollPosition={uSP} useIsScrolling={uIS} />;
}
