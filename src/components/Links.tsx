import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

const StyledAnchor = styled.a.attrs({
  className:
    'bg-secondary-theme-1 hover:bg-secondary-theme-2 active:bg-secondary-theme-2 text-white text-sm py-1 px-2 mb-2 rounded max-w-xs font-bold',
})``;

const Anchor: React.FC<AnchorProps> = (props) => {
  const { href, text } = props;
  return (
    <StyledAnchor href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </StyledAnchor>
  );
};

const Links = (props) => {
  const { links, domProps } = props;
  return (
    <section className="flex flex-col" {...domProps}>
      {links.live && <Anchor href={links.live} text="VISIT WEBSITE" />}
      {links.github && <Anchor href={links.github} text="VISIT GITHUB REPO" />}
      {links.github_client && (
        <Anchor
          href={links.github_client}
          text="VISIT GITHUB REPO ( CLIENT )"
        />
      )}
      {links.github_api && (
        <Anchor href={links.github_api} text="VISIT GITHUB REPO ( API )" />
      )}
    </section>
  );
};

export default React.memo(Links);
