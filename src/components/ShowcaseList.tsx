import React from 'react';
import { ShowcaseItem } from 'components';
import './ShowcaseList.scss';

export const ShowcaseList = (props) => {
  const { showcase, offsetY, openPortfolioItem } = props;
  return (
    <div
      className="showcaseList"
      style={{ transform: `translateY(-${offsetY}px)` }}
    >
      {showcase.map((s, index) => (
        <ShowcaseItem
          item={s}
          key={'itemInList' + index}
          className="mb-4"
          onClick={() => openPortfolioItem(s)}
        />
      ))}
    </div>
  );
};
