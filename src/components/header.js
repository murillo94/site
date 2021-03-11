import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import { Link } from './link';
import { Button } from './button';

import Logo from 'public/images/logo.svg';
import Twitter from 'public/images/twitter.svg';
import Circle from 'public/images/circle.svg';

export const Header = () => {
  const { pathname } = useRouter();
  const { setTheme, theme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/" ariaLabel="Home">
            <Logo />
          </Link>
        </div>
        <div className="right-menu">
          <div className="links-internal">
            <Link href="/" isSelected={pathname === '/'}>
              Me
            </Link>
            <Link
              href="/blog"
              isSelected={pathname === '/blog' || pathname === '/blog/[slug]'}
            >
              Blog
            </Link>
            <Link href="/resume" isSelected={pathname === '/resume'}>
              Resume
            </Link>
          </div>
          <div>
            <Link
              href="https://twitter.com/murillodmiranda"
              ariaLabel="Twitter"
              isExternal
              isIcon
            >
              <Twitter />
            </Link>
            <Button
              type="button"
              onClick={handleChangeTheme}
              ariaLabel="Dark/light mode"
            >
              <Circle />
            </Button>
          </div>
        </div>
      </nav>

      <style jsx>
        {`
          header {
            padding: 3rem 0.5rem 0;
            margin: 0 auto;
            max-width: 48rem;
          }

          header :global(a) {
            margin-right: 1rem;
          }

          .logo :global(a) {
            background-color: transparent;
            padding: 0;
            border: none;
            width: 3.2rem;
            height: 3.2rem;
          }

          .logo :global(a:hover) {
            color: currentcolor !important;
          }

          nav,
          nav div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
          }

          .right-menu {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          @media only screen and (max-width: 37.5rem) {
            header {
              padding: 1.25rem 1.25rem 0;
              max-width: 100%;
            }

            nav {
              margin: 0 -0.3125rem;
              flex-direction: column;
              align-items: flex-start;
            }

            header :global(a) {
              margin-right: 1.25rem;
            }
          }
        `}
      </style>
    </header>
  );
};
