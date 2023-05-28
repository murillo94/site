import Link from 'next/link';

import { InternalLinkNav } from '@/components/internal-link-nav/internal-link-nav';

import styles from './page.module.css';

export const metadata = {
  title: 'resume - professional background'
};

export default function Home() {
  return (
    <>
      <div>
        <h1>resume</h1>
        <p>professional background</p>
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
              <span className={styles.date}>(currently - 1.7 y)</span>
            </p>
            <p className={styles.experienceSubTitle}>
              remote - San Francisco, United States
            </p>
            <p className={styles.experienceLibs}>
              main libs: React, Nx (monorepo), Radix UI, React Aria
            </p>
            <ul className={styles.list}>
              <li>
                Origin helps people manage their compensation, benefits, and
                personal finances
              </li>
              <li>
                i&apos;ve been working on the core team to provide users a
                comprehensive overview of their spending habits, spending and
                category-based spending analysis
              </li>
              <li>
                led the creation and maintenance of the Design System. Developed
                reusable components in collaboration with the Design Ops team.
                Emphasized accessibility standards and optimized performance to
                enhance user experience across products
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.experienceTitle}>
              senior frontend engineer at{' '}
              <Link href="https://magnetis.com.br/" target="_blank">
                Magnetis
              </Link>{' '}
              <span className={styles.date}>(1.5 y)</span>
            </p>
            <p className={styles.experienceSubTitle}>
              remote - São Paulo, Brazil
            </p>
            <p className={styles.experienceLibs}>
              main libs: React, React Native, React Navigation, Hygraph, Radix
              UI
            </p>
            <ul className={styles.list}>
              <li>
                Magnetis is the first digital investment manager in Brazil
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
              <span className={styles.date}>(1.5 y)</span>
            </p>
            <p className={styles.experienceSubTitle}>
              onsite - Joinville, Brazil
            </p>
            <p className={styles.experienceLibs}>main libs: React, Django</p>
            <ul className={styles.list}>
              <li>Mercos is a results and sales potentialize</li>
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
              <span className={styles.date}>(3.4 y)</span>
            </p>
            <p className={styles.experienceSubTitle}>
              onsite - Joinville, Brazil
            </p>
            <p className={styles.experienceLibs}>
              main libs: React, AngularJS, Ionic
            </p>
            <ul className={styles.list}>
              <li>SaleSpots is a market intelligence to find new customers</li>
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
          <li>portuguese - native</li>
          <li>english - advanced</li>
        </ul>
      </section>
      <section>
        <h2>education</h2>
        <ul className={styles.list}>
          <li>
            software engineering bachelor - Católica de Santa Catarina,
            Joinville, Brazil <span className={styles.date}>(2016-2020)</span>
          </li>
          <li>
            computer technologist - UniSociesc, Joinville, Brazil{' '}
            <span className={styles.date}>(2013-2015)</span>
          </li>
        </ul>
      </section>
      <footer>
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
