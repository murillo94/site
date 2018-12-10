import Page from '../layouts/page';
import Navigation from '../components/navigation';

export default () => (
  <Page>
    <section>
      <div>
        <span>Hi im</span>
        <h1>Murillo de Miranda</h1>
        <Navigation />
      </div>
    </section>

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
        margin-bottom: 5.5em;
      }

      span {
        margin-right: 5px;
        font-size: 25px;
        font-weight: 200;
      }

      h1 {
        margin: 0.3em 0 0 0;
      }

      h1::first-letter {
        font-size: 45px;
      }

      @media (min-width: 768px) {
        section div {
          text-align: center;
        }

        h1 {
          margin: 0;
          display: inline-block;
        }
      }
    `}</style>
  </Page>
);
