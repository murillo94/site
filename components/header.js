import { Link } from "./link";

export const Header = () => (
  <header>
    <nav>
      <Link href="/">Me</Link>
      <Link href="/essays">Blog</Link>
      <Link href="/resume">Resume</Link>
    </nav>

    <style jsx>
      {`
        header {
          padding: 48px 8px 0;
          max-width: 768px;
          margin: 0 auto;
        }
      `}
    </style>
  </header>
);
