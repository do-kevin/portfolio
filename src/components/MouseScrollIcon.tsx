import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { colors } from 'theme';

const StyledMouseScrollIcon = styled.span.attrs({
  className: 'scrollIcon',
})`
  ${tw`flex relative justify-center`}
  height: 3em;
  width: 1.5em;
  border-width: 0.25rem;
  border-style: solid;
  border-radius: 1em;
  .scrollIcon {
    &__outerWheel {
      ${tw`block relative overflow-hidden`}
      top: 0.6em;
      height: 0.7em;
      width: 0.4em;
      border-radius: 0.4em;
    }

    &__innerWheel {
      ${tw`block w-full h-full border-solid`}
      display: block;
      height: 100%;
      width: 100%;
      border-radius: inherit;
      border-width: 0.15em;
      transition: background-color 270ms;
      transition: border-color 270ms;
      background: lightgray;
    }
  }

  .scrolling {
    animation: scrolling 2000ms ease-in-out infinite;
  }

  @keyframes scrolling {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-0.3em);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(0.3em);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const MouseScrollIcon = (props) => {
  const { className, style, isScrolling } = props;

  return (
    <StyledMouseScrollIcon className={className} style={style}>
      <span className="scrollIcon__outerWheel scrolling">
        <span
          className={`scrollIcon__innerWheel`}
          style={{
            backgroundColor: isScrolling
              ? colors['secondary-theme-2']
              : 'lightgray',
            borderColor: isScrolling ? colors['secondary-theme-1'] : 'white',
          }}
        />
      </span>
    </StyledMouseScrollIcon>
  );
};

export default React.memo(MouseScrollIcon);
