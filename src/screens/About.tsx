import React from 'react';
import { Box, Heading, Paragraph, Anchor } from 'grommet';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Resume = require('assets/documents/kevindo_resume_march2020.docx');

const StyledBox = styled(Box)`
  max-width: 720px;
  text-align: left;
  margin: 0 auto;
  height: auto;
`;

const anchors = [
  {
    icon: faGithub,
    label: 'GitHub',
    href: 'https://github.com/do-kevin',
  },
  {
    icon: faLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kevin-v-do',
  },
  {
    icon: faPaperPlane,
    label: 'do.kevin.vo@gmail.com',
    href: 'mailto:do.kevin.vo@gmail.com',
  },
  {
    icon: faFileAlt,
    label: 'Resume (.docx)',
    href: Resume,
  },
];

const About = () => {
  return (
    <StyledBox margin="auto" justify="center" pad="medium">
      <Heading size="large" level={3}>
        Pleased to meet you,
      </Heading>
      <Heading
        size="large"
        style={{ right: 3 }}
        className="relative font-titilliumWeb"
        margin={{ bottom: 'small' }}
      >
        I am Kevin Do
      </Heading>
      <Heading size="large" level={3} margin={{ bottom: 'small' }}>
        A{' '}
        <span className="text-secondary-theme-1" style={{ color: '#a7ff83' }}>
          Front End
        </span>{' '}
        Engineer, <br />
        based in California
      </Heading>
      <Paragraph
        color="quaternary-theme-1"
        fill
        size="large"
        className="text-base"
        margin={{ bottom: 'small' }}
      >
        I specialize in building web applications and bringing the clients'
        projects to life. Want to work together? Feel free to reach me.
      </Paragraph>
      <Box width="auto">
        {anchors.map(({ label, href, icon }) => (
          <Box direction="row" margin={{ bottom: 'xsmall' }}>
            <Box width="xxsmall" justify="center">
              <FontAwesomeIcon icon={icon} />
            </Box>
            <Box width="auto">
              <Anchor label={label} href={href} color="secondary-theme-1" />
            </Box>
          </Box>
        ))}
      </Box>
    </StyledBox>
  );
};

export default About;
