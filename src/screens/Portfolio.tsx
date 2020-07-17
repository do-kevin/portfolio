import React from 'react';
import { Box, Image } from 'grommet';
import styled from 'styled-components';
import showcase from 'showcase.json';

const curve = '1rem';

const StyledBox = styled(Box)`
  .mosiacShowcase {
    &__item {
      border-radius: ${curve};
      width: 49.7%;
    }
    &__item--featured {
      width: 100%;
    }
    &__itemImage {
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
      className="pt-10 rounded mosiacShowcase"
      style={{ transform: `translateY(-${offsetY}px)` }}
    >
      <Box direction="row" justify="between" wrap style={{ maxWidth: 720 }}>
        {showcase.map((s, index) => (
          <Box
            onClick={() => openPortfolioItem(s)}
            key={'mosiacShowcaseItem__' + index}
            className={`rounded mt-1 mosiacShowcase__item ${
              s.featured ? 'mosiacShowcase__item--featured shadow-lg' : ''
            }`}
          >
            <Image
              src={s.image || undefined}
              fit="cover"
              className="mosiacShowcase__itemImage"
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
