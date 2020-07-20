import React from 'react';
import './MouseScrollIcon.scss';

const MouseScrollIcon = (props) => {
  const { className, style } = props;
  return (
    <span className={`scrollIcon ${className}`} style={style}>
      <span className="scrollIcon__outerWheel">
        <span className="scrollIcon__innerWheel"></span>
      </span>
    </span>
  );
};

export default MouseScrollIcon;
