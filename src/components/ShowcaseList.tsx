import React from 'react';
import { ShowcaseItem } from 'components';
import './ShowcaseList.scss';

const ShowcaseList = (props) => {
  const { showcase, offsetY, openPortfolioItem } = props;
  return (
    <div
      className="showcaseList"
      style={{ transform: `translateY(-${offsetY}px)` }}
    >
      {showcase.map((s) => (
        <ShowcaseItem
          item={s}
          className="mb-4"
          onClick={() => openPortfolioItem(s)}
        />
      ))}
    </div>
  );
};

export default ShowcaseList;
