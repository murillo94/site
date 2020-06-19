import { Link } from "./link";

import Twitter from "../public/images/twitter.svg";
import Circle from "../public/images/circle.svg";

export const Header = () => (
  <header>
    <nav>
      <div>
        <Link href="/">Me</Link>
        <Link href="/essays">Blog</Link>
        <Link href="/resume">Resume</Link>
      </div>
      <div className="right-menu">
        <Link href="https://twitter.com/murillodmiranda" isExternal isIcon>
          <Twitter />
        </Link>
        <Link href="" isIcon>
          <Circle />
        </Link>
      </div>
    </nav>

    <style jsx>
      {`
        header {
          padding: 48px 8px 0;
          margin: 0 auto;
          max-width: 768px;
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row;
        }

        .right-menu {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}
    </style>
  </header>
);
