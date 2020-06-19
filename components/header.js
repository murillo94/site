import { Link } from "./link";

export const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="https://twitter.com/murillodmiranda" isExternal>
            Thoughts
          </Link>
        </li>
        <li>
          <Link href="https://github.com/murillo94" isExternal>
            Code
          </Link>
        </li>
        <li>
          <Link href="https://dribbble.com/murillodmiranda" isExternal>
            Visuals
          </Link>
        </li>
        <li>
          <Link href="/essays">Blog</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      header {
        padding: 48px 8px 0;
        max-width: 768px;
        margin: 0 auto;
      }

      ul {
        padding: 0;
        margin: 0;
      }

      li {
        display: inline-block;
      }

      @media (max-width: 767px) {
        li {
          display: block;
          margin: 22px 0;
        }
      }
    `}</style>
  </header>
);
