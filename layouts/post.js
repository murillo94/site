import { NextSeo } from 'next-seo';

import { Page } from './page';

const Post = ({ children, title, description, slug }) => (
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
    <Page defaultSeo={false}>{children}</Page>
  </>
);

export default Post;
