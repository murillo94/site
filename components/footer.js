import { Link } from "./link";

import Twitter from "../public/images/twitter.svg";
import Github from "../public/images/github.svg";
import Dribbble from "../public/images/dribbble.svg";
import Twitch from "../public/images/twitch.svg";
import Linkedin from "../public/images/linkedin.svg";

export const Footer = () => (
  <footer>
    <nav>
      <Link href="https://twitter.com/murillodmiranda" isExternal isIcon>
        <Twitter />
      </Link>
      <Link href="https://github.com/murillo94" isExternal isIcon>
        <Github />
      </Link>
      <Link href="https://dribbble.com/murillodmiranda" isExternal isIcon>
        <Dribbble />
      </Link>
      <Link href="https://twitch.tv/murillodmiranda" isExternal isIcon>
        <Twitch />
      </Link>
      <Link href="https://linkedin.com/in/murillodmiranda" isExternal isIcon>
        <Linkedin />
      </Link>
    </nav>

    <style jsx>
      {`
        footer {
          padding: 16px;
        }

        footer :global(a) {
          margin-right: 16px;
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media only screen and (max-width: 600px) {
          footer {
            padding: 20px;
          }

          header :global(a) {
            margin-right: 24px;
          }
        }
      `}
    </style>
  </footer>
);
