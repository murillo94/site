import { default as LinkNext } from "next/link";

export const Link = ({ children, href, isExternal }) => (
  <>
    {isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <LinkNext href={href}>
        <a>{children}</a>
      </LinkNext>
    )}

    <style jsx>{`
      a {
        font-size: 16px;
        padding: 5px 0;
        border-radius: 6px;
        transition: all 0.2s;
      }

      @media (min-width: 768px) {
        a {
          font-size: 15px;
          padding: 6px 10px;
        }

        a:hover {
          background: #efefef;
        }
      }
    `}</style>
  </>
);
