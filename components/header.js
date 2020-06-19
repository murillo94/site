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
      <div>
        <Link href="https://twitter.com/murillodmiranda" isExternal>
          <Twitter />
        </Link>
        <Link href="">
          <Circle />
        </Link>
      </div>
    </nav>

    <style jsx>
      {`
        header {
          padding: 48px 8px 0;
          max-width: 768px;
          margin: 0 auto;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
        }
      `}
    </style>
  </header>
);
