import Page from "../layouts/page";
import { H1 } from "../components/heading";
import { Paragraph } from "../components/paragraph";

export default () => (
  <>
    <Page>
      <H1>Hi, I'm Murillo de Miranda</H1>
      <Paragraph>
        I am a developer, writer and sometimes streamer from Brazil.
      </Paragraph>
      <Paragraph>
        This is where I write about the things I'm working on and share what
        I've learned.
      </Paragraph>
    </Page>

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

      @media (min-width: 768px) {
        section div {
          text-align: center;
          margin-bottom: 5.5em;
        }
      }
    `}</style>
  </>
);
