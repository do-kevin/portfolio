import LoadingImg from 'assets/gifs/gradientLoading.gif';
import { Box } from 'grommet';
import React from 'react';
import Img from 'react-cool-img';
import showcase from 'showcase.json';
import styled from 'styled-components';

const curve = '4px';

const bp1 = '32em';

const mq1 = `only screen and (max-height: ${bp1})`;

const StyledBox = styled(Box).attrs({
  className: 'pt-10 rounded mosiacShowcase',
})`
  @media ${mq1} {
    padding-top: 0;
  }
  .mosiacShowcase {
    &__heading:first-child {
      @media ${mq1} {
        font-size: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
    &__heading:not(:first-child) {
      @media ${mq1} {
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
    }
    &__item {
      border-radius: ${curve};
      width: 49.7%;
    }
    &__item--featured {
      width: 100%;
      @media ${mq1} {
        width: 65%;
        margin: auto;
      }
    }
    &__itemImage {
      height: 99%;
      border-top-left-radius: ${curve};
      border-top-right-radius: ${curve};
    }
    &__itemName {
      text-align: center;
      padding: 0.5rem 0.75rem;
      border-bottom-left-radius: ${curve};
      border-bottom-right-radius: ${curve};
      @media only screen and (max-width: 600px) {
        padding: 0.25rem 0.5rem;
      }
    }
  }
`;

const Portfolio = (props) => {
  const { offsetY, openPortfolioItem } = props;
  return (
    <StyledBox
      direction="column"
      margin="auto"
      style={{ transform: `translateY(-${offsetY}px)` }}
    >
      <Box
        direction="row"
        justify="between"
        wrap
        fill
        style={{ maxWidth: 720 }}
      >
        <span className="mosiacShowcase__heading block text-5xl w-full text-center mt-12 mb-8 font-lato">
          WORK
        </span>
        {showcase
          .filter((s) => s.type === 'work')
          .map((s: any, index) => (
            <Box
              onClick={() => openPortfolioItem(s)}
              key={'mosiacShowcaseItem__work' + index}
              className={`rounded mt-1 mosiacShowcase__item ${
                s.featured ? 'mosiacShowcase__item--featured shadow-lg' : ''
              }`}
            >
              <Img
                placeholder={LoadingImg}
                src={s.image || undefined}
                className={`object-cover mosiacShowcase__itemImage`}
                alt={s.name + ' image'}
              />
              <span className="block relative text-white bg-black text-base mosiacShowcase__itemName">
                {s.name}
              </span>
            </Box>
          ))}
        <span className="mosiacShowcase__heading block text-5xl w-full text-center mt-12 mb-8 font-lato">
          PROJECTS
        </span>
        {showcase
          .filter((s) => s.type === 'project')
          .map((s: any, index) => (
            <Box
              onClick={() => openPortfolioItem(s)}
              key={'mosiacShowcaseItem__project' + index}
              className={`rounded mt-1 mosiacShowcase__item ${
                s.featured ? 'mosiacShowcase__item--featured shadow-lg' : ''
              }`}
            >
              <Img
                placeholder={LoadingImg}
                src={s.image || undefined}
                className={`object-cover mosiacShowcase__itemImage`}
                alt={s.name + ' image'}
              />
              <span className="block relative text-white bg-black text-base mosiacShowcase__itemName">
                {s.name}
              </span>
            </Box>
          ))}
      </Box>
    </StyledBox>
  );
};

export default Portfolio;
