import Link from 'next/link';

import Page from '../layouts/page';
import Back from '../components/back';

export default () => (
  <Page>
    <Back />
    <article>
      <h1>Murillo's Resume</h1>
      <div>
        <p>Murillo de Miranda Pereira</p>
        <p>Joinville, SC, Brazil</p>
        <p>murillomir0@gmail.com</p>
        <Link href={'https://www.linkedin.com/in/murillodmiranda/'}>
          <a>Linkedin</a>
        </Link>
        <Link href={'https://github.com/murillo94'}>
          <a>Github</a>
        </Link>
      </div>

      <div>
        <p>
          I have a experience ranging React, React Native, Angular to doing stuffs in backend with Python, NodeJS, Java.
        </p>
        <p>
          I'm constanting learning about things like folks, enviroments or tech. Let's learn together.
        </p>
      </div>

      <div className="infos">
        <div>
          <h2>Education</h2>
          <p>
            Centro Universitário - Católica de Santa Catarina, Joinville/Brazil
          </p>
          <ul>
            <li>Software Engineering</li>
            <li>2017 / 2020</li>
          </ul>
        </div>
        <div>
          <h2>Love work with</h2>
          <p>
            Frontend web development, Mobile development, Functional programming, UX principles, Performance First
          </p>
        </div>
        <div>
          <h2>Also know/like</h2>
          <p>
            Languages:
            <span>
              Javascript, Python, C++, Elixir
              <span>(newbie learning for self study)</span>
            </span>
          </p>
          <p>
            Databases:
            <span>DynamoDB, MySQL, MongoDB</span>
          </p>
          <p>
            Frameworks / Libs:
            <span>
              ReactJS, Nextjs, React Native, ReasonReact, NodeJS, AngularJS, Ionic
            </span>
          </p>
          <p>
            Platforms and Tools:
            <span>AWS (Lambda, S3, DynamoDB), Git</span>
          </p>
        </div>
        <div>
          <h2>Experience</h2>
          <p>
            Founder & Developer
            <span>
              -
              <Link href={'http://salespots.co/'}>
                <a>SaleSpots</a>
              </Link>
              , Joinville, Brazil
            </span>
          </p>
          <ul>
            <li>
              Helping companies to find out where target audience, explore new markets, control the team flow, and sell more
            </li>
            <li>2016 / Current</li>
          </ul>
        </div>
        <div>
          <h2>Languages</h2>
          <p>
            Portuguese
            <span>- Native</span>
          </p>
          <p>
            English
            <span>- Fluent</span>
          </p>
        </div>
      </div>
    </article>

    <style jsx>
      {`
        article {
          height: 100%;
          line-height: 1.5;
        }

        div {
          margin-bottom: 40px;
        }

        h1 {
          margin: 0 0 40px;
        }

        h2 {
          font-size: 24px;
          font-weight: 500;
          font-style: italic;
        }

        p {
          font-size: 16px;
          margin: 0 0 10px;
        }

        a {
          color: #aaa;
          text-decoration: underline;
          display: block;
          margin-bottom: 10px;
          width: max-content;
        }

        span {
          font-weight: 400;
          color: #aaa;
          margin-left: 5px;
        }

        span a {
          display: inline-block;
          margin-left: 5px;
          margin-bottom: 0;
        }

        ul {
          margin: 12px 0;
        }

        li {
          margin-bottom: 10px;
        }

        .infos p {
          font-weight: 500;
        }
      `}
    </style>
  </Page>
);
