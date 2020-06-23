import Page from "../layouts/page";
import { H1 } from "../components/heading";
import { Paragraph } from "../components/paragraph";

export default () => (
  <Page>
    <H1>Hi, I'm Murillo de Miranda</H1>
    <Paragraph>
      I am a developer, writer and sometimes streamer from Brazil.
    </Paragraph>
    <Paragraph>
      This is where I write about the things I'm working on and share what I've
      learned.
    </Paragraph>

    <style jsx>
      {`
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
          margin-bottom: 8rem;
        }

        span {
          margin-right: 0.3125rem;
          font-size: 1.5625rem;
          font-weight: 200;
        }

        @media (min-width: 48rem) {
          section div {
            text-align: center;
            margin-bottom: 5.5rem;
          }
        }
      `}
    </style>
  </Page>
);
