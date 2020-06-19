import Page from "../layouts/page";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default () => (
  <>
    <Header />
    <Page>
      <h1>Hi, I'm Murillo de Miranda</h1>
      <p>I am a developer, writer and sometimes streamer from Brazil.</p>
      <p>
        This is where I write about the things I'm working on and share what
        I've learned.
      </p>
    </Page>
    <Footer />

    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100%;
      }

      section div {
        width: 100%;
        text-align: left;
        margin-bottom: 8em;
      }

      span {
        margin-right: 5px;
        font-size: 25px;
        font-weight: 200;
      }

      h1 {
        font-size: 48px;
        font-weight: 700;
      }

      p {
        margin-bottom: 32px;
      }

      @media (min-width: 768px) {
        section div {
          text-align: center;
          margin-bottom: 5.5em;
        }
      }
    `}</style>
  </>
);
