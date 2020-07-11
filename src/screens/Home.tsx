import React, { Component } from 'react';
import { Grommet, grommet, Grid, Box, Image } from 'grommet';
import { animateScroll as scroll } from 'react-scroll';
import { useScrollPosition } from 'hooks/useScrollPosition';
import showcase from 'showcase.json';

const src =
  'https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/b77fe464cfc445da9003a5383a3e1acf.jpg/v1/fill/w_322,h_182,q_90,usm_0.60_1.00_0.01/b77fe464cfc445da9003a5383a3e1acf.jpg';

const showcaseModifier = 9;

class HomeClass extends Component<{ useScrollPosition: number[] }> {
  state = {
    availableScrolling: 0,
  };
  componentDidMount() {
    scroll.scrollToTop();
    const scrollHeight = document.body.scrollHeight;
    const test =
      (scrollHeight * (showcase.length * showcaseModifier)) / 69 - 10;
    this.setState({ ...this.state, availableScrolling: test });
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
                  background="accent-2"
                  pad="small"
                  justify="center"
                >
                  Kevin Do
                  <div>{offsetY}</div>
                </Box>
                <Box as="main" background="accent-3" justify="center">
                  <section
                    className="flex flex-row items-center justify-center absolute"
                    style={{ right: '40rem' }}
                  >
                    {showcase.map((item, index) => {
                      return (
                        <>
                          <Box
                            key={index}
                            background="brand"
                            pad="medium"
                            style={{
                              transform: `translateX(${
                                offsetY / showcase.length
                              }rem)`,
                              marginLeft: '55rem',
                              width: '20rem',
                              height: '20rem',
                            }}
                          >
                            <Image fit="cover" src={src}></Image>
                            Name: {item.name} {index}
                          </Box>
                        </>
                      );
                    })}
                  </section>
                </Box>
                <Box as="footer" background="accent-4">
                  Footer
                </Box>
              </Grid>
            </Box>
            <Box as="nav" pad="medium" background="dark-1">
              <ul>
                <li>Portfolio</li>
                <li>Contact</li>
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
