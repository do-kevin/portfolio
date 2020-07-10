import React, { Component } from 'react';
import { Grommet, grommet, Grid, Box } from 'grommet';
import { useScrollPosition } from 'hooks/useScrollPosition';

class HomeClass extends Component<{ useScrollPosition: number[] }> {
  render() {
    const { useScrollPosition } = this.props;
    const [, , , offsetY] = useScrollPosition;
    return (
      <Grommet theme={grommet}>
        <Grid fill rows={['flex', 'flex', 'auto']}>
          <Box background="accent-1">HOME</Box>
          <Box background="accent-2">Content</Box>
          <Box background="accent-3" style={{ height: 1200 }}>
            Placeholder
            <span className="fixed bottom-0 bg-gray-500 p-4">{offsetY}</span>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}

export default function Home(props) {
  const uSP = useScrollPosition();
  return <HomeClass {...props} useScrollPosition={uSP} />;
}
