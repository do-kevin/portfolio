import React from 'react';
import { Box } from 'grommet';
import Img from 'react-cool-img';
import LoadingImg from 'assets/gifs/gradientLoading.gif';

const ShowcasePreview = (props: any) => {
  const { showcase } = props;
  const { image, name } = showcase;
  return (
    <>
      <figure className="shadow-lg rounded showcaseItem__figure">
        <Img
          placeholder={LoadingImg}
          src={image || undefined}
          className={`object-contain rounded showcaseItem__image`}
          alt={name + ' image'}
        />
      </figure>
      <Box
        as="footer"
        direction="row"
        justify="center"
        align="center"
        pad="small"
      >
        <Box className="text-4xl leading-none text-center font-titilliumWeb showcaseItem__name">
          {name || ''}
        </Box>
      </Box>
    </>
  );
};

export default React.memo(ShowcasePreview);
