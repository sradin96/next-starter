import React from 'react';

type LinkProps = {
  className: string;
  href: string;
  onClick?: () => void;
  target?: '_blank' | '_self' | '_parent' | '_top';
  children: React.ReactNode;
};

const Link = ({ className, href, onClick, target, children }: LinkProps) => {
  return (
    <a
      className={`link link--main ${className?.length ? className : ''}`}
      href={href}
      onClick={onClick}
      target={target}
    >
      {children}
    </a>
  );
};

export default Link;
