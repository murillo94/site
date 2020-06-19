import { default as LinkNext } from "next/link";

export const Link = ({ children, href, isExternal, isIcon }) => (
  <>
    {isExternal ? (
      <a
        className={isIcon && "icon"}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <LinkNext href={href}>
        <a className={isIcon && "icon"}>{children}</a>
      </LinkNext>
    )}

    <style jsx>{`
      a {
        font-size: 16px;
        border-radius: 6px;
        padding: 5px 0;
        transition: all 0.2s;
      }

      .icon {
        display: flex;
        align-items: center;
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
