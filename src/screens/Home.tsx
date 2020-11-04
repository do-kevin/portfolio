import { faBriefcase, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseScrollIcon, ShowcaseCarousel, ShowcaseList } from 'components';
import { mqMaxHeight0, mqMaxHeight3 } from 'constants/mediaQueries';
import { Box, Grid, Grommet } from 'grommet';
import { useIsScrolling, useScrollPosition } from 'hooks';
import React, { Component } from 'react';
import { imported } from 'react-imported-component/macro';
import { NavLink, Route } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import showcase from 'showcase.json';
import styled from 'styled-components';
import { colors, theme as MyGrommetTheme } from 'theme';

const StyledGrid = styled(Grid)`
  @media ${mqMaxHeight3} {
    grid-template-rows: 1.825em 1fr 0 !important;
  }
  @media ${mqMaxHeight0} {
    grid-template-rows: 48px 1fr 48px;
  }
`;

const Portfolio = imported(() => import('screens/Portfolio'));
const About = imported(() => import('screens/About'));
const ShowcaseLayer = imported(() => import('components/ShowcaseLayer'));

const showcaseModifier = 11;

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
            <ShowcaseLayer
              showcase={currentInfo}
              onClose={() => this.closePortfolioItem()}
            />
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
              <StyledGrid rows={['xsmall', 'flex', 'xsmall']} fill>
                <Box justify="center" align="center">
                  <NavLink
                    exact
                    to="/"
                    className="text-black w-full h-full flex justify-center items-center text-3xl focus:shadow-outline hover:text-secondary-theme-1 transition duration-200 ease-in-out font-lato"
                    activeStyle={{ color: colors['secondary-theme-1'] }}
                  >
                    KD
                  </NavLink>
                </Box>
                <Box justify="center" align="center">
                  <NavLink
                    exact
                    to="/about"
                    className="text-black w-full py-4 flex justify-center items-center text-3xl focus:shadow-outline hover:text-secondary-theme-1 transition duration-200 ease-in-out"
                    activeStyle={{ color: colors['secondary-theme-1'] }}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </NavLink>
                  <MouseScrollIcon isScrolling={isScrolling} />
                  <NavLink
                    exact
                    to="/portfolio"
                    className="text-black w-full py-4 flex justify-center items-center text-3xl focus:shadow-outline hover:text-secondary-theme-1 transition duration-200 ease-in-out"
                    activeStyle={{ color: colors['secondary-theme-1'] }}
                  >
                    <FontAwesomeIcon icon={faBriefcase} />
                  </NavLink>
                </Box>
                <Box justify="center" align="center"></Box>
              </StyledGrid>
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

export default function Home(props) {
  const uSP = useScrollPosition();
  const uIS = useIsScrolling();
  return <HomeClass {...props} useScrollPosition={uSP} useIsScrolling={uIS} />;
}
