'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { Link } from 'shared/ui/Link';

type Props = {
  href: string;
  text: string;
};

export function SideMenuLink(props: Props) {
  const { href, text } = props;
  const pathname = usePathname();
  return (
    <Link
      underline="none"
      className={clsx(
        'outline-none underline-offset-4 transition-colors py-2 hover:text-dark focus:underline',
        pathname.endsWith(href) && 'text-primaryDark',
      )}
      href={href}
    >
      {text}
    </Link>
  );
}
