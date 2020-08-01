import React from 'react';
import { Layer, Box, Grid, Button } from 'grommet';
import Img from 'react-cool-img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Links } from 'components';
import LoadingImg from 'assets/gifs/gradientLoading.gif';

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

const bpw1 = '56em';
const bp2 = '24em';
const mq1 = `only screen and (max-width: ${bpw1})`;
const mq2 = `only screen and (max-width: ${bp2})`;

const StyledLayer = styled(Layer).attrs({
  className: 'showcaseLayer overflow-auto',
})`
  .showcaseLayer {
    &__wrapper {
      max-width: ${bpw1};
    }
    &__closeButton {
    }
    &__name {
      font-size: 4rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      @media ${mq1} {
        margin: 0;
      }
      @media ${mq2} {
        font-size: 2.5rem;
      }
    }
    &__image {
      min-height: 30em;
      @media ${mq1} {
        min-height: auto;
      }
    }
    &__content {
      @media ${mq2} {
        font-size: 0.825rem;
      }
    }
  }
`;

const ShowcaseLayer = (props) => {
  const { onClose, showcase } = props;
  return (
    <StyledLayer
      full
      animation="fadeIn"
      onEsc={onClose}
      onClickOutside={onClose}
    >
      <Box
        margin="auto"
        direction="column"
        style={{ maxWidth: 900 }}
        className="pb-4 showcaseLayer__wrapper"
        fill
      >
        <CloseButton className="showcaseLayer__closeBtn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} className="block m-auto" />
        </CloseButton>
        <span className="showcaseLayer__name block font-bold text-center leading-tight font-titilliumWeb">
          {showcase ? showcase && showcase.name : ''}
        </span>
        <Img
          placeholder={LoadingImg}
          src={(showcase && showcase.image) || undefined}
          className={`showcaseLayer__image rounded-lg mb-4 shadow-md object-contain`}
          alt={showcase ? showcase && showcase.name + ' image' : ''}
        />
        <Grid
          fill="vertical"
          columns={['flex', 'auto']}
          gap="small"
          className="pb-6 showcaseLayer__content"
        >
          <Box
            className="p-3 rounded-lg"
            style={{
              backgroundColor: 'rgba(1, 0, 15, 0.8)',
            }}
          >
            {showcase && showcase.description && (
              <>
                <span className="text-gray-500 font-titilliumWeb font-bold text-base">
                  Description
                </span>
                <p>{showcase.description}</p>
              </>
            )}
            <div className="flex flex-col">
              <span className="text-gray-500 font-titilliumWeb font-bold text-base">
                Links
              </span>
              <Links links={showcase.links} />
            </div>
          </Box>
          <Box
            align="end"
            className="p-3 rounded-lg"
            style={{
              backgroundColor: 'rgba(1, 0, 15, 0.8)',
            }}
          >
            <span className="text-gray-500 font-titilliumWeb font-bold text-base">
              Technologies used
            </span>
            <ul className="text-right">
              {showcase &&
                showcase.technology &&
                showcase.technology.length &&
                showcase.technology.map((t, idx) => (
                  <li key={'tech_' + idx}>{t}</li>
                ))}
            </ul>
          </Box>
        </Grid>
      </Box>
    </StyledLayer>
  );
};

export default ShowcaseLayer;
