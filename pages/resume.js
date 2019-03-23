import React, { useState, useContext } from 'react';

import Link from 'next/link';

import Page from '../layouts/page';
import Back from '../components/back';
import Translate from '../components/translate';
import { LanguageContext, languages } from '../contexts/language';

function Bio() {
  const context = useContext(LanguageContext)[0];
  const content = languages[context];

  return (
    <article>
      <h1>{content.title}</h1>
      <div>
        <p>Murillo de Miranda Pereira</p>
        <p>{content.city}</p>
        <p>murillomir0@gmail.com</p>
        <div className="link-bio">
          <div className="show-print">
            <Link href={'https://github.com/murillo94'}>
              <a>Site</a>
            </Link>
            <span>- murillodmiranda.com</span>
          </div>
          <div>
            <Link href={'https://www.linkedin.com/in/murillodmiranda/'}>
              <a>Linkedin</a>
            </Link>
            <span className="show-print">
              - linkedin.com/in/murillodmiranda
            </span>
          </div>
          <div>
            <Link href={'https://github.com/murillo94'}>
              <a>Github</a>
            </Link>
            <span className="hide-print">- {content.code}</span>
            <span className="show-print">- github.com/murillo94</span>
          </div>
          <div className="hide-print">
            <Link
              href={
                'https://en.wikipedia.org/w/index.php?limit=50&title=Special%3AContributions&contribs=user&target=Murillodmiranda&namespace=&tagfilter=&start=&end='
              }
            >
              <a>Wikipedia</a>
            </Link>
            <span>- {content.translation}</span>
          </div>
          <div className="hide-print">
            <Link
              href={
                'https://developer.mozilla.org/pt-BR/profiles/murillodmiranda'
              }
            >
              <a>MDN</a>
            </Link>
            <span>- {content.translation}</span>
          </div>
          <div className="hide-print">
            <Link
              href={
                'https://stackoverflow.com/users/10746566/murillo-de-miranda-pereira'
              }
            >
              <a>Stack Overflow</a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p>{content.first_intro}</p>
        <p>{content.second_intro}</p>
      </div>
      <div className="infos">
        <div>
          <h2>{content.education}</h2>
          <div>
            <p>
              Centro Universitário - Católica de Santa Catarina,{' '}
              {content.city_state}
            </p>
            <ul>
              <li>{content.software}</li>
              <li>2017 / 2020</li>
            </ul>
          </div>
          <div>
            <p>
              UniSociesc - Universidade Sociedade Educacional de Santa Catarina,{' '}
              {content.city_state}
            </p>
            <ul>
              <li>{content.computer}</li>
              <li>2016 / 2016</li>
            </ul>
          </div>
          <div>
            <p>
              UniSociesc - Educação e Tecnologia, Campus Boa Vista,{' '}
              {content.city_state}
            </p>
            <ul>
              <li>{content.tec}</li>
              <li>2013 / 2015</li>
            </ul>
          </div>
        </div>
        <div>
          <h2>{content.love_work}</h2>
          <p>{content.love_content}</p>
        </div>
        <div className="break-page" />
        <div className="margin-print">
          <h2>{content.love_also}</h2>
          <p>{content.love_also_content}</p>
        </div>
        <div>
          <h2>{content.know_work}</h2>
          <p>
            {content.lang}:
            <span>
              Javascript, Python, C++, Java, Elixir
              <span>({content.learning})</span>
            </span>
          </p>
          <p>
            {content.database}:<span>DynamoDB, MySQL, MongoDB</span>
          </p>
          <p>
            Frameworks / Libs:
            <span>
              ReactJS, Nextjs, React Native, ReasonReact, NodeJS, AngularJS,
              Ionic
            </span>
          </p>
          <p>
            {content.platform}:
            <span>
              AWS (Lambda, S3, DynamoDB {content.services}), Git, Heroku, Fabric
            </span>
          </p>
          <p>
            {content.others}:
            <span>CI/CD, TDD, SEO, APIs REST, RPC, XP, Scrum, Kanban</span>
          </p>
        </div>
        <div>
          <h2>{content.publication}</h2>
          <ol>
            <li>
              <b>Murillo M. Pereira</b>, Gabriel Back, Nabor W. Júnior.
              <i> "Arquitetura baseada em microserviço"</i>. The Open Software
              Engineering Journal, 2018
            </li>
          </ol>
        </div>
        <div>
          <h2>{content.exp}</h2>
          <p>
            {content.exp1_position}
            <span>
              -
              <Link href={'http://salespots.co/'}>
                <a>SaleSpots</a>
              </Link>
              , {content.city_state}
            </span>
          </p>
          <ul>
            <li>{content.exp1_desc}</li>
            <li>2016 / {content.current}</li>
          </ul>
        </div>
        <div>
          <h2>{content.lng_speak}</h2>
          <p>
            {content.portuguese}
            <span>- {content.native}</span>
          </p>
          <p>
            {content.english}
            <span>- {content.intermediate}</span>
          </p>
        </div>
      </div>

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
            border-radius: 6px;
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

          b {
            font-weight: normal;
            text-decoration: underline;
          }

          ul {
            margin: 12px 0;
          }

          li {
            margin-bottom: 10px;
          }

          .link-bio div {
            margin: 0;
            display: flex;
          }

          .link-bio span {
            color: inherit;
          }

          .infos,
          .infos div:last-child {
            margin: 0;
          }

          .infos p {
            font-weight: 500;
          }

          .infos div > div {
            margin-bottom: 20px;
          }

          .show-print {
            display: none !important;
            opacity: 0;
          }

          .break-page {
            page-break-after: always;
          }

          @media print {
            .show-print {
              display: inline-flex !important;
              opacity: 1;
            }

            .hide-print {
              display: none !important;
              opacity: 0;
            }

            .margin-print {
              margin-top: 1.3cm;
            }
          }
        `}
      </style>
    </article>
  );
}

export default function() {
  const [language, setLanguage] = useState('en');

  return (
    <Page>
      <LanguageContext.Provider value={[language, setLanguage]}>
        <Back />
        <Translate />
        <Bio />
      </LanguageContext.Provider>
    </Page>
  );
}
