import Link from 'next/link';

import styles from './internal-link-nav.module.css';
import { Fragment } from 'react';

interface Props {
  links: { slug: string; name: string }[];
}

export function InternalLinkNav({ links }: Props) {
  const linksLength = links.length - 1;

  return (
    <nav className={styles.internals}>
      {links.map((item, index) => (
        <Fragment key={item.slug}>
          <Link href={item.slug}>{item.name}</Link>
          {index !== linksLength ? <span>&#9676;</span> : null}
        </Fragment>
      ))}
    </nav>
  );
}
