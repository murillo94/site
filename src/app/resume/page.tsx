import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Link from 'next/link';

import { InternalLinkNav } from '@/components/internal-link-nav/internal-link-nav';

import styles from './page.module.css';

export const metadata = {
  title: 'resume - professional background'
};

const saleSpotsYears = 3.4;
const mercosYear = 1.5;
const magnetisYear = 1.5;

dayjs.extend(duration);

export default function Home() {
  const diffDate = dayjs.duration(dayjs('2021-11-15').diff(new Date()));
  const years = Math.abs(diffDate.get('years'));
  const months = Math.abs(diffDate.get('months'));
  const currentJobYears = parseFloat(`${years}.${months}`);
  const totalJobsYears = Math.floor(
    saleSpotsYears + mercosYear + magnetisYear + currentJobYears
  );

  return (
    <>
      <div>
        <h1>resume</h1>
        <p>professional background</p>
      </div>
      <div>
        <p>+{totalJobsYears} years of experience as a frontend engineer</p>
      </div>
      <div className={`${styles.infos} ${styles['on-print']}`}>
        <p>name: Murillo de Miranda Pereira</p>
        <p>city: Joinville, Brazil</p>
        <p>email: murillomir0@gmail.com</p>
        <p>site: murillodmiranda.com</p>
        <p>linkedin: linkedin.com/in/murillodmiranda</p>
        <p>github: github.com/murillo94</p>
      </div>
      <section>
        <h2>experience</h2>
        <div className={styles.experiencesGroup}>
          <div>
            <p className={styles.experienceTitle}>
              senior frontend engineer at{' '}
              <Link href="https://www.useorigin.com/" target="_blank">
                Origin
              </Link>{' '}
              <span className={styles.date}>
                (currently - {currentJobYears} yr)
              </span>
            </p>
            <p className={styles.experienceSubTitle}>
              Boston, United States - remote
            </p>
            <p className={styles.experienceLibs}>
              main libs: React, Nx (monorepo), Radix UI, React Aria
            </p>
            <ul className={styles.list}>
              <li>
                Origin helps people manage their compensation, benefits, and
                personal finances.
              </li>
              <li>
                i&apos;ve been working on the core team to provide users a
                comprehensive overview of their spending habits, spending and
                category-based spending analysis.
              </li>
              <li>
                led the creation and maintenance of the Design System. Developed
                reusable components in collaboration with the Design Ops team.
                Emphasized accessibility standards and optimized performance to
                enhance user experience across products.
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.experienceTitle}>
              senior frontend engineer at{' '}
              <Link href="https://magnetis.com.br/" target="_blank">
                Magnetis
              </Link>{' '}
              <span className={styles.date}>({magnetisYear} yr)</span>
            </p>
            <p className={styles.experienceSubTitle}>
              São Paulo, Brazil - remote
            </p>
            <p className={styles.experienceLibs}>
              main libs: React, React Native, React Navigation, Hygraph, Radix
              UI
            </p>
            <ul className={styles.list}>
              <li>
                Magnetis is the first digital investment manager in Brazil.
              </li>
              <li>
                crucial role in the development of the authentication flow and
                automated account creation process, ensuring compliance with
                regulatory bodies. Enabled users to become investment-ready
                within minutes.
              </li>
              <li>
                led the creation of the institutional website and CMS. Empowered
                the marketing team by providing them with a flexible platform to
                test, optimizing user engagement and conversion.
              </li>
              <li>
                demonstrated versatility by gaining exposure to technologies
                such as Elixir, Phoenix, and MySQL during a specific period.
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.experienceTitle}>
              frontend engineer at
              <Link href="https://mercos.com/" target="_blank">
                {' '}
                Mercos
              </Link>{' '}
              <span className={styles.date}>({mercosYear} yr)</span>
            </p>
            <p className={styles.experienceSubTitle}>
              Joinville, Brazil - onsite
            </p>
            <p className={styles.experienceLibs}>main libs: React, Django</p>
            <ul className={styles.list}>
              <li>Mercos is a results and sales potentializer.</li>
              <li>
                led the frontend development of the e-commerce platform to
                successfully restructure the project while ensuring
                uninterrupted product functionality. Optimized the user
                experience by revamping the architecture and implementing best
                practices.
              </li>
              <li>
                spearheaded the development of a new design system, prioritizing
                accessibility. Worked closely with the design and engineering
                teams to ensure seamless integration and adoption of the design
                system.
              </li>
              <li>
                gained valuable experience working with Python, Django, and
                MySQL as part of a full-stack development role.
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.experienceTitle}>
              frontend engineer at{' '}
              <Link
                href="https://www.linkedin.com/company/salespots/"
                target="_blank"
              >
                SaleSpots
              </Link>{' '}
              <span className={styles.date}>({saleSpotsYears} yr)</span>
            </p>
            <p className={styles.experienceSubTitle}>
              Joinville, Brazil - onsite
            </p>
            <p className={styles.experienceLibs}>
              main libs: React, AngularJS, Ionic
            </p>
            <ul className={styles.list}>
              <li>SaleSpots is a market intelligence to find new customers.</li>
              <li>
                key role in the frontend architecture of SaleSpots&apos; market
                intelligence application. Ensured the development of a
                responsive, accessible, and scalable PWA.
              </li>
              <li>
                expanded expertise by working with Node.js and various AWS
                services, including Lambda, DynamoDB, and S3. Leveraged Node.js
                to develop backend functionalities. Utilized AWS services to
                enhance application performance, security, and scalability.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>language</h2>
        <ul className={styles.list}>
          <li>english - advanced</li>
          <li>portuguese - native</li>
        </ul>
      </section>
      <section>
        <h2>education</h2>
        <ul className={styles.list}>
          <li>
            software engineering bachelor - Católica de Santa Catarina,
            Joinville, Brazil <span className={styles.date}>(2015-2020)</span>
          </li>
          <li>
            computer technologist - UniSociesc, Joinville, Brazil{' '}
            <span className={styles.date}>(2013-2015)</span>
          </li>
        </ul>
      </section>
      <footer className={styles['off-print']}>
        <InternalLinkNav
          links={[
            { slug: '/', name: 'home' },
            { slug: '/blog', name: 'blog' }
          ]}
        />
      </footer>
    </>
  );
}
