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
          <h1>Murillo de Miranda Pereira</h1>
        </div>
        <p>software engineer & indie maker</p>
      </div>
      <section>
        <h2>currently</h2>
        <ul>
          <li>
            crafting financial solutions at{' '}
            <Link href="https://www.useorigin.com/" target="_blank">
              Origin
            </Link>{' '}
            (senior frontend)
          </li>
        </ul>
      </section>
      <section>
        <h2>sometimes</h2>
        <ul>
          <li>
            contributing to open source projects as{' '}
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
            write <Link href="/blog">blog posts</Link>
          </li>
          <li>
            design some{' '}
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
            2023 / 2024 • sold my first company{' '}
            <Link href="https://plantripai.com/" target="_blank">
              an AI tool that creates your starter customized trip itinerary in
              seconds
            </Link>
          </li>
          <li>
            2021 / <span>present</span> • frontend engineer at the{' '}
            <Link href="https://useorigin.com/" target="_blank">
              only platform that helps people grow, track, manage, and save
              money, all from one place
            </Link>
          </li>
          <li>
            2020 / 2021 • frontend engineer at the{' '}
            <Link href="https://magnetis.com.br/" target="_blank">
              first digital wealth management platform in Brazil
            </Link>
          </li>
          <li>
            2019 / 2020 • frontend engineer at an{' '}
            <Link href="https://mercos.com/" target="_blank">
              awesome b2b sales system and e-commerce
            </Link>
          </li>
          <li>
            2016 / 2019 • frontend engineer and proud to be the first employee
            at a{' '}
            <Link
              href="https://www.linkedin.com/company/salespots/"
              target="_blank"
            >
              startup that helps companies to find potencial buyers in any
              region of Brazil
            </Link>
          </li>
          <li>
            2016 / <span>present</span> • freelance software engineer,
            full-stack developer
          </li>
          <li>
            2016 / <span>present</span> • start contributing to open source
          </li>
          <li>2010 / 2016 • period of pure code study</li>
          <li>2010 • first line of code</li>
          <li>1998 • boot</li>
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
        <div className={styles.footer}>
          <InternalLinkNav
            links={[
              { slug: '/blog', name: 'blog' },
              { slug: '/resume', name: 'resume' }
            ]}
          />
        </div>
      </footer>
    </>
  );
}
