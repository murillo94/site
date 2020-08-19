import React, { useState, useContext } from 'react';

import { Page } from '../layouts/page';
import { H1 } from '../components/heading';
import { Translate } from '../components/translate';
import { Link } from '../components/link';

import publications from '../data/publications';

import { LanguageContext, languages } from '../contexts/language';

function Bio() {
  const context = useContext(LanguageContext)[0];
  const content = languages[context];

  const cleanUrlPrint = url => url.replace('//', '');

  return (
    <>
      <H1>{content.personalTitle}</H1>
      <div>
        <p>{content.name}</p>
        <p>{content.city}</p>
        <p>{content.email}</p>
        <div className="link-bio">
          {content.links.map(({ name, href, description }) => {
            if (name === 'Site') {
              return (
                <div key={name} className="show-print">
                  <Link href={href} isExternal>
                    {name}
                  </Link>
                  <span>- {href}</span>
                </div>
              );
            }

            if (name === 'Linkedin') {
              return (
                <div key={name}>
                  <Link href={href} isExternal>
                    {name}
                  </Link>
                  <span className="show-print">- {cleanUrlPrint(href)}</span>
                </div>
              );
            }

            if (name === 'Github') {
              return (
                <div key={name}>
                  <Link href={href} isExternal>
                    {name}
                  </Link>
                  <span className="hide-print">- {description}</span>
                  <span className="show-print">- {cleanUrlPrint(href)}</span>
                </div>
              );
            }

            if (name === 'Stack Overflow') {
              return (
                <div key={name} className="hide-print">
                  <Link href={href} isExternal>
                    {name}
                  </Link>
                </div>
              );
            }

            return (
              <div key={name} className="hide-print">
                <Link href={href}>{name}</Link>
                <span>- {description}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        {content.personalIntros.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className="infos">
        <div>
          <h2>{content.educationTitle}</h2>
          {content.institutes.map(({ name, city, course, year }) => (
            <div key={course}>
              <p>
                {name}, {city}
              </p>
              <ul>
                <li>{course}</li>
                <li>{year}</li>
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2>{content.loveWorkTitle}</h2>
          <p>{content.loveContent}</p>
        </div>

        <div className="margin-print">
          <h2>{content.loveAlsoTitle}</h2>
          <p>{content.loveAlsoContent}</p>
        </div>

        <div>
          <h2>{content.knowledgeTitle}</h2>
          {content.knowledges.map(({ name, description }) => (
            <p key={name}>
              {name}:<span>{description}</span>
            </p>
          ))}
        </div>

        <div>
          <h2>{content.publicationsTitle}</h2>
          <ol>
            {publications.map(({ me, others, title, publisher, year }) => (
              <li key={title}>
                <b>{me}</b>, {others}.<i> &quot;{title}&quot;</i>. {publisher},{' '}
                {year}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2>{content.jobsTitle}</h2>
          {content.companies.map(
            ({
              position,
              site,
              name,
              city,
              descriptionCompany,
              descriptionTech,
              time
            }) => (
              <div key={time}>
                <p>
                  {position}
                  <span>
                    -
                    <Link href={site} isExternal>
                      {name}
                    </Link>
                    / {city}
                  </span>
                </p>
                <ul>
                  <li>{descriptionCompany}</li>
                  {descriptionTech && <li>{descriptionTech}</li>}
                  <li>{time}</li>
                </ul>
              </div>
            )
          )}
        </div>

        <div className="break-page" />
        <div className="margin-print">
          <h2>{content.languageTitle}</h2>
          {content.languages.map(({ name, level }) => (
            <p key={name}>
              {name}
              <span>- {level}</span>
            </p>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          div {
            margin-bottom: 2.5rem;
          }

          h2 {
            font-size: 1.5rem;
            font-weight: 500;
            font-style: italic;
          }

          p {
            font-size: 1rem;
            margin: 0 0 0.625rem;
          }

          a {
            color: #aaa;
            text-decoration: underline;
            border-radius: 0.375rem;
            display: block;
            margin-bottom: 0.625rem;
            width: max-content;
          }

          span {
            font-weight: 400;
            color: #aaa;
            margin-left: 0.3125rem;
          }

          span a {
            display: inline-block;
            margin-left: 0.3125rem;
            margin-bottom: 0;
          }

          b {
            font-weight: normal;
            text-decoration: underline;
          }

          ul {
            margin: 0.75rem 0;
          }

          li {
            margin-bottom: 0.625rem;
          }

          .link-bio div {
            margin: 0 -0.625rem;
            display: flex;
            align-items: center;
          }

          .link-bio span {
            color: inherit;
            margin: 0;
          }

          .infos,
          .infos div:last-child {
            margin: 0;
          }

          .infos p {
            font-weight: 500;
          }

          .infos div > div {
            margin-bottom: 1.25rem;
          }

          .show-print {
            display: none !important;
            opacity: 0;
          }

          .break-page {
            page-break-after: always;
          }

          @media only screen and (max-width: 37.5rem) {
            .link-bio div {
              margin: 0;
            }
          }

          @media (max-width: 62rem) {
            section {
              max-width: 100%;
            }
          }

          @media print {
            section {
              max-width: 100%;
            }

            .link-bio {
              margin: 0 0.3125em;
            }

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

            i {
              font-style: initial;
            }
          }
        `}
      </style>
    </>
  );
}

const Resume = () => {
  const [language, setLanguage] = useState('en');

  return (
    <Page>
      <LanguageContext.Provider value={[language, setLanguage]}>
        <Translate />
        <Bio />
      </LanguageContext.Provider>

      <style jsx>
        {`
          :global(main) {
            position: relative;
          }

          :global(main) :global(button) {
            position: absolute;
            right: 0;
          }

          @media only screen and (max-width: 37.5rem) {
            :global(main) :global(button) {
              right: 1.25rem;
            }
          }
        `}
      </style>
    </Page>
  );
};

export default Resume;
