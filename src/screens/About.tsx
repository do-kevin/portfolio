import React from 'react';
import { Box, Heading, Paragraph, Anchor } from 'grommet';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  max-width: 720px;
  text-align: left;
  margin: 0 auto;
  height: auto;
`;

const About = () => {
  return (
    <StyledBox margin="auto" justify="center" pad="small">
      <Heading size="large" level={3}>
        Pleased to meet you,
      </Heading>
      <Heading size="large">I am Kevin Do</Heading>
      <Heading size="large" level={3} margin={{ bottom: 'small' }}>
        A Front End Engineer, <br />
        based in California
      </Heading>
      <Paragraph fill size="large">
        I specialize in building web applications and bringing the clients'
        projects to life. Want to work together? Feel free to reach me.
      </Paragraph>
      <Box>
        <Anchor label="GitHub" href="https://github.com/do-kevin" />
        <Anchor
          label="LinkedIn"
          href="https://www.linkedin.com/in/kevin-v-do"
        />
        <Anchor
          label="do.kevin.vo@gmail.com"
          href="mailto:do.kevin.vo@gmail.com"
        />
      </Box>
    </StyledBox>
  );
};

export default About;
