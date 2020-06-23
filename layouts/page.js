import Head from "next/head";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
