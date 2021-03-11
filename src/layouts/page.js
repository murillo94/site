import { DefaultSeo } from 'next-seo';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import configSeo from '../../seo.json';

export const Page = ({ children, defaultSeo = true }) => (
  <>
    {defaultSeo && <DefaultSeo {...configSeo} />}
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
