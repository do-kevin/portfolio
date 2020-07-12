import React, { Component } from 'react';
import { Grommet, grommet, Grid, Box } from 'grommet';
import { animateScroll as scroll } from 'react-scroll';
import { ShowcaseCarousel } from 'components';
import { useScrollPosition } from 'hooks/useScrollPosition';
import showcase from 'showcase.json';

const showcaseModifier = 9;

class HomeClass extends Component<{ useScrollPosition: number[] }> {
  state = {
    availableScrolling: 0,
  };
  componentDidMount() {
    scroll.scrollToTop();
    const scrollHeight = document.body.scrollHeight;
    let scrollArea =
      (scrollHeight * (showcase.length * showcaseModifier)) / 69 - 9;
    scrollArea = Math.round(scrollArea);
    this.setState({ ...this.state, availableScrolling: scrollArea });
  }
  render() {
    const { useScrollPosition } = this.props;
    const [, , , offsetY] = useScrollPosition;
    return (
      <>
        <Grommet full theme={grommet}>
          <Grid
            fill="vertical"
            columns={['flex', 'auto']}
            className="w-full h-full fixed top-0"
          >
            <Box as="main" background="accent-1" fill responsive>
              <Grid rows={['xsmall', 'flex', 'xsmall']} fill="vertical">
                <Box
                  as="header"
                  background="dark-2"
                  pad="small"
                  justify="center"
                >
                  Kevin Do
                  <div>{Math.round(offsetY)}</div>
                </Box>
                <ShowcaseCarousel
                  offsetY={offsetY}
                  availableScrolling={this.state.availableScrolling}
                  showcase={showcase}
                />
                <Box as="footer" background="dark-2">
                  Footer
                </Box>
              </Grid>
            </Box>
            <Box as="nav" pad="medium" background="dark-3">
              <ul className="text-white font-bold h-full">
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
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
