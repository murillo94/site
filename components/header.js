import { useRouter } from "next/router";
import useDarkMode from "use-dark-mode";

import { Link } from "./link";
import { Button } from "./button";

import Twitter from "../public/images/twitter.svg";
import Circle from "../public/images/circle.svg";

export const Header = () => {
  const { pathname } = useRouter();
  const darkMode = useDarkMode(false);

  return (
    <header>
      <nav>
        <div>
          <Link href="/" isSelected={pathname === "/"}>
            Me
          </Link>
          <Link href="/blog" isSelected={pathname === "/blog"}>
            Blog
          </Link>
          <Link href="/resume" isSelected={pathname === "/resume"}>
            Resume
          </Link>
        </div>
        <div className="right-menu">
          <Link href="https://twitter.com/murillodmiranda" isExternal isIcon>
            <Twitter />
          </Link>
          <Button type="button" onClick={darkMode.toggle}>
            <Circle />
          </Button>
        </div>
      </nav>

      <style jsx>
        {`
          header {
            padding: 48px 8px 0;
            margin: 0 auto;
            max-width: 768px;
          }

          header :global(a) {
            margin-right: 16px;
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
};
