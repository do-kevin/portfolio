import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faFileAlt,
  faFilePdf,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor, Box, Heading, Paragraph } from 'grommet';
import React from 'react';
import styled from 'styled-components';

const Resume = require('assets/documents/kevindo_resume_september2020.docx');
const ResumePDF = require('assets/documents/kevindo_resume_september2020.pdf');

const bp1 = '24em';

const mq1 = `only screen and (max-height: ${bp1})`;

const StyledBox = styled(Box).attrs({ className: 'about' })`
  max-width: 720px;
  text-align: left;
  margin: 0 auto;
  height: auto;

  .about {
    &__greeting {
      @media ${mq1} {
        font-size: 1rem;
      }
    }
    &__introduction {
      @media ${mq1} {
        left: -1px;
        font-size: 2.5rem;
        line-height: 0.9;
      }
    }
    &__role {
      @media ${mq1} {
        font-size: 1.2rem;
        line-height: 1.2;
      }
    }
    &__description {
      @media ${mq1} {
        font-size: 1rem;
        line-height: 1.2;
      }
    }
    &__links {
      @media ${mq1} {
        font-size: 0.9rem;
        line-height: 1.2;
      }
    }
    &__icons {
      @media ${mq1} {
        width: 1rem;
        margin-right: 0.7em;
      }
    }
  }
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
  {
    icon: faFilePdf,
    label: 'Resume (.pdf)',
    href: ResumePDF,
    download: ResumePDF,
  },
];

const About = () => {
  return (
    <StyledBox margin="auto" justify="center" pad="medium">
      <Heading size="large" level={3} className="about__greeting">
        Pleased to meet you,
      </Heading>
      <Heading
        size="large"
        style={{ right: 3 }}
        className="relative font-titilliumWeb about__introduction"
        margin={{ bottom: 'small' }}
      >
        I am Kevin Do
      </Heading>
      <Heading
        size="large"
        level={3}
        margin={{ bottom: 'small' }}
        className="about__role"
      >
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
        className="text-base about__description"
        margin={{ bottom: 'small' }}
      >
        I specialize in building web applications and bringing the clients'
        projects to life. Want to work together? Feel free to reach me.
      </Paragraph>
      <Box width="auto" className="about__links">
        {anchors.map(({ label, href, icon, download }, idx) => (
          <Box
            direction="row"
            margin={{ bottom: 'xsmall' }}
            key={'anchor_' + idx}
          >
            <Box width="xxsmall" justify="center" className="about__icons">
              <FontAwesomeIcon icon={icon} />
            </Box>
            <Box width="auto">
              {(download && (
                <Anchor
                  label={label}
                  href={href}
                  download={download}
                  color="secondary-theme-1"
                />
              )) || (
                <Anchor label={label} href={href} color="secondary-theme-1" />
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </StyledBox>
  );
};

export default About;
