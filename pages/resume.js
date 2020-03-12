import React, { useState, useContext } from "react";

import Link from "next/link";

import Page from "../layouts/page";
import Back from "../components/back";
import Translate from "../components/translate";

import publications from "../data/publications";

import { LanguageContext, languages } from "../contexts/language";

function Bio() {
  const context = useContext(LanguageContext)[0];
  const content = languages[context];

  const cleanUrlPrint = url => url.replace("//", "");

  return (
    <article>
      <h1>{content.personalTitle}</h1>
      <div>
        <p>{content.name}</p>
        <p>{content.city}</p>
        <p>{content.email}</p>
        <div className="link-bio">
          {content.links.map(({ name, href, description }) => {
            if (name == "Site") {
              return (
                <div className="show-print">
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                  <span>- {href}</span>
                </div>
              );
            }

            if (name === "Linkedin") {
              return (
                <div>
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                  <span className="show-print">- {cleanUrlPrint(href)}</span>
                </div>
              );
            }

            if (name === "Github") {
              return (
                <div>
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                  <span className="hide-print">- {description}</span>
                  <span className="show-print">- {cleanUrlPrint(href)}</span>
                </div>
              );
            }

            if (name === "Stack Overflow") {
              return (
                <div className="hide-print">
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                </div>
              );
            }

            return (
              <div className="hide-print">
                <Link href={href}>
                  <a>{name}</a>
                </Link>
                <span>- {description}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        {content.personalIntros.map(item => (
          <p>{item}</p>
        ))}
      </div>

      <div className="infos">
        <div>
          <h2>{content.educationTitle}</h2>
          {content.institutes.map(({ name, city, course, year }) => (
            <div>
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

        <div className="break-page" />
        <div className="margin-print">
          <h2>{content.loveAlsoTitle}</h2>
          <p>{content.loveAlsoContent}</p>
        </div>

        <div>
          <h2>{content.knowledgeTitle}</h2>
          {content.knowledges.map(({ name, description }) => (
            <p>
              {name}:<span>{description}</span>
            </p>
          ))}
        </div>

        <div>
          <h2>{content.publicationsTitle}</h2>
          <ol>
            {publications.map(({ me, others, title, publisher, year }) => (
              <li>
                <b>{me}</b>, {others}.<i> "{title}"</i>. {publisher}, {year}
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
              <>
                <p>
                  {position}
                  <span>
                    -
                    <Link href={site}>
                      <a>{name}</a>
                    </Link>
                    , {city}
                  </span>
                </p>
                <ul>
                  <li>{descriptionCompany}</li>
                  <li>{descriptionTech}</li>
                  <li>{time}</li>
                </ul>
              </>
            )
          )}
        </div>

        <div>
          <h2>{content.languageTitle}</h2>
          {content.languages.map(({ name, level }) => (
            <>
              <p>
                {name}
                <span>- {level}</span>
              </p>
            </>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          article {
            height: 100%;
            max-width: 70%;
            line-height: 1.6;
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

          @media (max-width: 991px) {
            article {
              max-width: 100%;
            }
          }

          @media print {
            article {
              max-width: 100%;
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
          }
        `}
      </style>
    </article>
  );
}

export default function() {
  const [language, setLanguage] = useState("en");

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
