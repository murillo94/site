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
          Passionate about contributing to mission-driven teams and enhancing
          product value through exceptional frontend development.
        </p>
        <p>Clear communication is essential to everything.</p>
      </div>
      <div className={`${styles.infos} ${styles['on-print']}`}>
        <p>Name: Murillo de Miranda Pereira</p>
        <p>City: Joinville, Brazil</p>
        <p>Email: murillomir0@gmail.com</p>
        {/* <p>Site: murillodmiranda.com</p> */}
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
              <li>
                Contributed to the core team by delivering detailed analyses of
                user spending habits, including both overall and
                category-specific insights.
              </li>
              <li>
                Enhanced user experience by leading the development and
                maintenance of a comprehensive Design System, creating
                accessible, high-performance, reusable components in
                collaboration with Design Ops.
              </li>
              <li>
                Mentored junior engineers and led cross-functional initiatives
                to standardize frontend practices, driving product-led growth
                through superior customer experiences.
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
              Next.js, Hygraph, Radix UI, React Query
            </p>
            <ul className={styles.list}>
              <li>
                Led frontend development for the sign-up process and automatic
                account setup, ensuring compliance with legal standards and
                improving the user onboarding experience.
              </li>
              <li>
                Developed and managed the company’s website and CMS, providing
                the marketing team with dynamic tools to increase user
                engagement and sign-ups.
              </li>
              <li>
                Built backend features using Elixir, Phoenix, and MySQL,
                boosting functionality and system reliability.
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
              <li>
                Managed the e-commerce platform’s frontend revamp, restructuring
                the project while maintaining uninterrupted operations.
              </li>
              <li>
                Improved UX by updating the system's design in line with
                industry standards.
              </li>
              <li>
                Initiated and led the development of an accessibility-focused
                design system, collaborating with design and engineering teams
                to ensure seamless integration.
              </li>
              <li>
                Developed backend features using Python, Django, and MySQL to
                enhance functionality and reliability.
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
              <li>
                Played a key role in designing the frontend for SaleSpots’
                market intelligence app, focusing on building a fast,
                accessible, and scalable PWA.
              </li>
              <li>
                Expanded technical capabilities by implementing backend features
                with Node and integrating AWS services such as Lambda, DynamoDB,
                and S3, enhancing app performance, security, and scalability.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>Side projects</h2>
        <p>
          I&apos;ve been working on side projects after my 9–5 job, trying to
          build things I&apos;m passionate about and turn them into revenue,
          attracting customers and testing marketing strategies.
        </p>
        <ul className={styles.list}>
          <li>
            <Link href="https://proleilao.com.br" target="_blank">
              ProLeilão{' '}
              <span className={styles.experienceSubTitle}>
                (proleilao.com.br)
              </span>
            </Link>
            <p className={styles.experienceSubTitle}>
              A platform that allows users to search for home auctions in
              Brazil. More than 300k impressions on Google Search per month.
            </p>
          </li>
          <li>
            <Link href="https://plantripai.com/" target="_blank">
              PlanTripAI{' '}
              <span className={styles.experienceSubTitle}>
                (plantripai.com)
              </span>
            </Link>
            <p className={styles.experienceSubTitle}>
              A platform that allows users to plan trips using AI. I built it
              over a year and later sold the project.
            </p>
          </li>
        </ul>
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
          <li>English - Advanced</li>
          <li>Portuguese - Native</li>
        </ul>
      </section>
    </>
  );
}
