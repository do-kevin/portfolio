import React from 'react';
import { Layer, Box, Grid, Button } from 'grommet';
import Img from 'react-cool-img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import LoadingImg from 'assets/loadingImg.gif';

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

const ShowcaseLayer = (props) => {
  const { onClose, showcase } = props;
  return (
    <Layer
      full
      animation="fadeIn"
      onEsc={onClose}
      onClickOutside={onClose}
      className="overflow-auto"
    >
      <Box
        margin="auto"
        direction="column"
        style={{ maxWidth: 900 }}
        className="pb-4"
        fill
      >
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} className="block m-auto" />
        </CloseButton>
        <span className="block text-6xl font-bold my-12 text-center leading-tight font-titilliumWeb">
          {showcase ? showcase && showcase.name : ''}
        </span>
        <Img
          placeholder={LoadingImg}
          src={showcase ? showcase.image : undefined}
          debounce={500}
          className="rounded-lg mb-4 shadow-md object-contain"
          style={{ minHeight: 563 }}
        />
        <Grid
          fill="vertical"
          columns={['flex', 'auto']}
          gap="small"
          className="pb-6"
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
                showcase.technology.map((t) => <li>{t}</li>)}
            </ul>
          </Box>
        </Grid>
      </Box>
    </Layer>
  );
};

export default ShowcaseLayer;
