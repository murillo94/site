import { forwardRef } from 'react';
import { NextSeo } from 'next-seo';

import { Page } from './page';

import { H1 } from '../components/heading';
import { Paragraph } from '../components/paragraph';
import { Link } from '../components/link';
import { Span } from '../components/span';

const Post = forwardRef(({ children, post, author }, ref) => {
  const { title, description, slug, readingTime } = post;
  const { name, site, date } = author;

  return (
    <>
      <NextSeo
        title={`Murillo de Miranda Pereira - ${title}`}
        description={description}
        openGraph={{
          type: 'website',
          title,
          description,
          url: `http://murillodmiranda.com/${slug}`
        }}
      />
      <Page defaultSeo={false}>
        <div ref={ref}>
          <H1>{title}</H1>
          <div className="infos">
            <Paragraph>
              <Link href={site} isExternal isNormal>
                {name}
              </Link>
              &nbsp;•&nbsp;
              <Span>{date}</Span>
              &nbsp;•&nbsp;
              <Span>{readingTime} min</Span>
            </Paragraph>
          </div>
          {children}
        </div>
      </Page>

      <style jsx>
        {`
          .infos {
            font-size: 0.875rem;
            font-weight: 400;
            color: #aaa;
          }
        `}
      </style>
    </>
  );
});

export default Post;
