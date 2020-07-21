import React from 'react';
import './MouseScrollIcon.scss';

export const MouseScrollIcon = (props) => {
  const { className, style, isScrolling } = props;

  return (
    <span className={`scrollIcon ${className}`} style={{ ...style }}>
      <span className="scrollIcon__outerWheel scrolling">
        <span
          className={`scrollIcon__innerWheel`}
          style={{ borderColor: isScrolling ? '#43dde6' : 'white' }}
        />
      </span>
    </span>
  );
};
