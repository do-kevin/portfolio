import LoadingImg from 'assets/gifs/gradientLoading.gif';
import { Box } from 'grommet';
import React from 'react';
import Img from 'react-cool-img';

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
        <Box className="text-4xl mt-4 leading-none text-center font-lato showcaseItem__name">
          {name || ''}
        </Box>
      </Box>
    </>
  );
};

export default React.memo(ShowcasePreview);
