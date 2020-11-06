import React, { AllHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

const CtaAnchor = styled.a.attrs({
  className:
    'bg-secondary-theme-1 hover:bg-secondary-theme-2 active:bg-secondary-theme-2 text-white text-sm py-1 px-2 mb-2 rounded max-w-xs font-bold',
})``;

const StyledAnchor = styled.a.attrs({
  className:
    'text-white border-2 hover:border-secondary-theme-2 active:border-secondary-theme-2 hover:text-secondary-theme-2 active:text-secondary-theme-2 text-sm py-1 px-2 mb-2 rounded max-w-xs font-bold',
})``;

const Anchor: React.FC<AnchorProps> = (props) => {
  const { href, text } = props;
  return (
    <StyledAnchor href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </StyledAnchor>
  );
};

const CallToAction: React.FC<AnchorProps> = (props) => {
  const { href, text } = props;
  return (
    <CtaAnchor href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </CtaAnchor>
  );
};

interface LinksProps {
  links: {
    live?: string;
    github?: string;
    github_client?: string;
    github_api?: string;
  };
  domProps?: AllHTMLAttributes<HTMLElement>;
}

const Links: React.FC<LinksProps> = (props) => {
  const { links, domProps } = props;
  return (
    <section {...domProps} className="flex flex-col">
      {links.live && <CallToAction href={links.live} text="VISIT WEBSITE" />}
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
