import { Link } from "./link";

import Twitter from "../public/images/twitter.svg";
import Github from "../public/images/github.svg";
import Dribbble from "../public/images/dribbble.svg";
import Twitch from "../public/images/twitch.svg";
import Linkedin from "../public/images/linkedin.svg";

export const Footer = () => (
  <footer>
    <nav>
      <Link href="https://twitter.com/murillodmiranda" isExternal>
        <Twitter />
      </Link>
      <Link href="https://github.com/murillo94" isExternal>
        <Github />
      </Link>
      <Link href="https://dribbble.com/murillodmiranda" isExternal>
        <Dribbble />
      </Link>
      <Link href="https://twitch.tv/murillodmiranda" isExternal>
        <Twitch />
      </Link>
      <Link href="https://linkedin.com/in/murillodmiranda" isExternal>
        <Linkedin />
      </Link>
    </nav>

    <style jsx>
      {`
        footer {
          padding: 16px;
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}
    </style>
  </footer>
);