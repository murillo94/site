import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Page = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
