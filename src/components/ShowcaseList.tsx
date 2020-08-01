import React from 'react';
import { ShowcaseItem } from 'components';
import styled from 'styled-components';

const bp1 = '48em';
const mq1 = `only screen and (max-width: ${bp1})`;

const StyledDiv = styled.div.attrs({ className: 'showcaseList hidden' })`
  @media ${mq1} {
    display: block;
  }
`;

const ShowcaseList = (props) => {
  const { showcase, offsetY, openPortfolioItem } = props;
  return (
    <StyledDiv style={{ transform: `translateY(-${offsetY}px)` }}>
      {showcase.map((s, index) => (
        <ShowcaseItem
          type="list"
          item={s}
          key={'itemInList' + index}
          className="mb-4"
          onClick={() => openPortfolioItem(s)}
        />
      ))}
    </StyledDiv>
  );
};

export default React.memo(ShowcaseList);
