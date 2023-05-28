import Link from 'next/link';
import Image from 'next/image';

import { InternalLinkNav } from '@/components/internal-link-nav/internal-link-nav';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div>
        <div className={styles.title}>
          <div className={styles.image}>
            <Image
              src="/me.jpg"
              alt="a man wearing sunglasses standing in front of a lake"
              fill
              priority
            />
          </div>
          <h1>murillo de miranda pereira</h1>
        </div>
        <p>software engineer, indie maker & runner</p>
      </div>
      <section>
        <h2>currently</h2>
        <ul>
          <li>
            engineering frontend at{' '}
            <Link href="https://www.useorigin.com/" target="_blank">
              Origin
            </Link>
          </li>
          <li>
            building{' '}
            <Link href="https://plantripai.com/" target="_blank">
              PlanTripAI
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>sometimes</h2>
        <ul>
          <li>
            contribuiting to open source projects as{' '}
            <Link href="https://expo.dev/" target="_blank">
              Expo
            </Link>
            ,{' '}
            <Link href="https://www.radix-ui.com/" target="_blank">
              Radix UI
            </Link>
            ,{' '}
            <Link href="https://mdxjs.com/" target="_blank">
              MDX
            </Link>
          </li>
          <li>
            live streams at{' '}
            <Link href="https://twitch.tv/murillodmiranda" target="_blank">
              Twitch
            </Link>
          </li>
          <li>
            do <Link href="/blog">blog posts</Link>
          </li>
          <li>
            draw some{' '}
            <Link href="https://dribbble.com/murillodmiranda" target="_blank">
              UI designs
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>before</h2>
        <ul>
          <li>
            2020 - 2021 frontend engineer at the{' '}
            <Link href="https://magnetis.com.br/" target="_blank">
              first digital wealth management platform in Brazil
            </Link>
          </li>
          <li>
            2019 - 2020 frontend engineer at an{' '}
            <Link href="https://mercos.com/" target="_blank">
              awesome b2b sales system and e-commerce
            </Link>
          </li>
          <li>
            2017 - 2020 freelance software engineer, full-stack web developer
          </li>
          <li>2016 - ~ contributing to open source</li>
          <li>
            2016 - 2019 frontend engineer + proud first employee at a{' '}
            <Link
              href="https://www.linkedin.com/company/salespots/"
              target="_blank"
            >
              startup that helps users to find companies in any region of Brazil
              to sell
            </Link>
          </li>
          <li>2010 - 2016 a period of pure code study</li>
          <li>2010 first line of code</li>
          <li>1998 boot</li>
        </ul>
      </section>
      <footer>
        <nav className={styles.socials}>
          <Link
            href="https://twitter.com/murillodmiranda"
            aria-label="see my twitter"
            target="_blank"
          >
            <Image
              src="/twitter.svg"
              alt="Twitter logo"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="https://github.com/murillo94"
            aria-label="see my Github"
            target="_blank"
          >
            <Image src="/github.svg" alt="Github logo" width={20} height={20} />
          </Link>
          <Link
            href="https://dribbble.com/murillodmiranda"
            aria-label="see my Dribbble"
            target="_blank"
          >
            <Image
              src="/dribbble.svg"
              alt="Dribbble logo"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="https://twitch.tv/murillodmiranda"
            aria-label="see my Twitch"
            target="_blank"
          >
            <Image src="/twitch.svg" alt="Twitch logo" width={20} height={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/murillodmiranda"
            aria-label="see my Linkedin"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              alt="Linkedin logo"
              width={20}
              height={20}
            />
          </Link>
        </nav>
        <InternalLinkNav
          links={[
            { slug: '/blog', name: 'blog' },
            { slug: '/resume', name: 'resume' }
          ]}
        />
      </footer>
    </>
  );
}
