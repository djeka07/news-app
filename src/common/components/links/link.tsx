// eslint-disable-next-line no-restricted-imports
import RouterLink from 'next/link';
import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from 'react';
import { LinkStyleVariants, link } from './link.css';
import { css } from '@djeka07/utils';

type LinkProps = LinkStyleVariants & {
  href: string;

  className?: string;
  title?: string;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  isExternal?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

const Link = ({
  children,
  href,
  className,
  color = 'main',
  onClick,
  size = 'normal',
  title,
  isExternal,
  target,
}: LinkProps) =>
  !isExternal ? (
    <RouterLink
      target={target}
      className={css(link({ color, size }), className)}
      onClick={onClick}
      title={title}
      href={href}
    >
      {children}
    </RouterLink>
  ) : (
    <a target={target} className={css(className, link({ color, size }))} onClick={onClick} title={title} href={href}>
      {children}
    </a>
  );

export default Link;
