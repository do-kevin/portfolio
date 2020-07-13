import React from 'react';
import './MouseScrollIcon.scss';

const MouseScrollIcon = () => {
  return (
    <span className="scrollIcon">
      <span className="scrollIcon__outerWheel">
        <span className="scrollIcon__innerWheel"></span>
      </span>
    </span>
  );
};

export default MouseScrollIcon;
