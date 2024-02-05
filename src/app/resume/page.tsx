import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Link from 'next/link';

import { InternalLinkNav } from '@/components/internal-link-nav/internal-link-nav';

import styles from './page.module.css';

export const revalidate = 600000;
export const metadata = {
  title: 'resume - professional background'
};

const saleSpotsDays = 1241; // 1.241 days - 3.4 year
const mercosDays = 547; // 547 days - 1.5 year
const magnetisDays = 547; // 547 days - 1.5 year

dayjs.extend(duration);

const humaniseDate = (diff: number) => {
  let str = '';
  const values = [365, 30];
  const length = values.length;

  for (let i = 0; i < length; i++) {
    const amount = Math.floor(diff / values[i]);
    str += amount + (i === 0 ? '.' : '');
    diff -= amount * values[i];
  }

  return str;
};

export default function Home() {
  const diffDate = dayjs.duration(dayjs('2021-10-15').diff(new Date()));
  const currentJobDays = Math.abs(diffDate.asDays());

  return (
    <>
      <header className={styles['off-print']}>
        <InternalLinkNav
          links={[
            { slug: '/', name: 'home' },
            { slug: '/blog', name: 'blog' }
          ]}
        />
      </header>
      <div>
        <h1>Murillo&apos;s resume</h1>
        <p>Professional background</p>
      </div>
      <div className={styles.description}>
        <p>
          Passionate about crafting user-centric UI/UX for products that people
          love to use.
        </p>
        <p>Communication is the key for evertyhing.</p>
      </div>
      <div className={`${styles.infos} ${styles['on-print']}`}>
        <p>Name: Murillo de Miranda Pereira</p>
        <p>City: Joinville, Brazil</p>
        <p>Email: murillomir0@gmail.com</p>
        <p>Site: murillodmiranda.com</p>
        <p>Linkedin: linkedin.com/in/murillodmiranda</p>
        <p>Github: github.com/murillo94</p>
      </div>
      <section>
        <h2>Experience</h2>
        <div className={styles.experiencesGroup}>
          <div>
            <p className={styles.experienceTitle}>
              Senior frontend engineer at{' '}
              <Link href="https://www.useorigin.com/" target="_blank">
                Origin
              </Link>{' '}
              <span className={styles.date}>
                (present - {humaniseDate(currentJobDays)} yr)
              </span>
            </p>
            <p className={styles.experienceSubTitle}>
              Boston, United States - remote
            </p>
            <p className={styles.experienceLibs}>
              Main libs: Typescript, React, Nx (monorepo), Radix UI, React Aria,
              React Query
            </p>
            <ul className={styles.list}>
              {/* <li>
                Origin helps people manage their compensation, benefits, and
                personal finances.
              </li> */}
              <li>
                I&apos;ve been contributing to the core team by delivering
                detailed analysis of users spending habits, including overall
                and category-specific insights.
              </li>
              <li>
                Spearheaded the Design System&apos;s development and
                maintenance, crafting accessible and high-performance reusable
                components in partnership with the Design Ops team, elevating
                the user experience across platforms.
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.experienceTitle}>
              Senior frontend engineer at{' '}
              <Link href="https://magnetis.com.br/" target="_blank">
                Magnetis
              </Link>{' '}
              <span className={styles.date}>
                ({humaniseDate(magnetisDays)} yr)
              </span>
            </p>
            <p className={styles.experienceSubTitle}>
              São Paulo, Brazil - remote
            </p>
            <p className={styles.experienceLibs}>
              Main libs: Typescript, React, React Native, React Navigation,
              Hygraph, Radix UI, React Query
            </p>
            <ul className={styles.list}>
              {/* <li>
                Magnetis is the first digital investment manager in Brazil.
              </li> */}
              <li>
                Key contributor to designing the sign-up process and automatic
                account setup, meeting legal standards and quickly preparing
                users for investing.
              </li>
              <li>
                Led the build of the company website and CMS, giving the
                marketing team a dynamic tool to improve visitor interactions
                and increase sign-ups.
              </li>
              <li>
                For specific features, developed the backend using Elixir,
                Phoenix, and MySQL, enhancing functionality and reliability.
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.experienceTitle}>
              Frontend engineer at
              <Link href="https://mercos.com/" target="_blank">
                {' '}
                Mercos
              </Link>{' '}
              <span className={styles.date}>
                ({humaniseDate(mercosDays)} yr)
              </span>
            </p>
            <p className={styles.experienceSubTitle}>
              Joinville, Brazil - onsite
            </p>
            <p className={styles.experienceLibs}>
              Main libs: Typescript, Flow, React, Django
            </p>
            <ul className={styles.list}>
              {/* <li>Mercos is a results and sales potentializer.</li> */}
              <li>
                Managed the e-commerce platform&apos;s frontend revamp, ensuring
                the project was restructured without affecting ongoing
                operations. Improved user experience by updating the
                system&apos;s design and following industry standards.
              </li>
              <li>
                Initiated and guided the creation of an accessibility-focused
                design system, collaborating with design and engineering teams
                for its smooth integration and widespread adoption.
              </li>
              <li>
                For specific features, developed the backend using Python,
                Django, and MySQL, enhancing functionality and reliability.
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.experienceTitle}>
              Frontend engineer at{' '}
              <Link
                href="https://www.linkedin.com/company/salespots/"
                target="_blank"
              >
                SaleSpots
              </Link>{' '}
              <span className={styles.date}>
                ({humaniseDate(saleSpotsDays)} yr)
              </span>
            </p>
            <p className={styles.experienceSubTitle}>
              Joinville, Brazil - onsite
            </p>
            <p className={styles.experienceLibs}>
              Main libs: Typescript, React, AngularJS, Ionic
            </p>
            <ul className={styles.list}>
              {/* <li>SaleSpots is a market intelligence to find new customers.</li> */}
              <li>
                Played a pivotal role in designing the frontend for
                SaleSpots&apos; market intelligence app, focusing on creating a
                fast, accessible, and scalable Progressive Web App (PWA).
              </li>
              <li>
                Broadened technical skills by using Node for backend features
                and integrating AWS services like Lambda, DynamoDB, and S3 to
                boost the app&apos;s performance, security, and ability to
                scale.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>Education</h2>
        <ul className={styles.list}>
          <li>
            Software engineering bachelor - Católica de Santa Catarina,
            Joinville, Brazil <span className={styles.date}>(2015-2020)</span>
          </li>
          <li>
            Computer technologist - UniSociesc, Joinville, Brazil{' '}
            <span className={styles.date}>(2013-2015)</span>
          </li>
        </ul>
      </section>
      <section>
        <h2>Languages</h2>
        <ul className={styles.list}>
          <li>English - advanced</li>
          <li>Portuguese - native</li>
        </ul>
      </section>
    </>
  );
}
