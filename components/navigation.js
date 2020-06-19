import { Link } from "./link";

export default () => (
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
        <Link href="/essays">Essays</Link>
      </li>
      <li>
        <Link href="/resume">Resume</Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
        width: 100%;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
      }

      ul {
        padding: 0;
        margin: 0;
      }

      li {
        display: inline-block;
      }

      @media (max-width: 767px) {
        nav {
          text-align: left;
        }

        li {
          display: block;
          margin: 22px 0;
        }
      }
    `}</style>
  </nav>
);
