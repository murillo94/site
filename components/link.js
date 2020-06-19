import { default as LinkNext } from "next/link";

export const Link = ({ children, href, isExternal, isIcon, isSelected }) => (
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

    <style jsx>
      {`
         {
          color: inherit;
          text-decoration: none;
          border-radius: ${isSelected ? "6px 6px 0 0" : "6px"};
          box-shadow: ${isSelected ? "0 1px 0 0 currentColor" : "none"};
          padding: 5px;
          transition: background-color 0.1s;
          display: ${isIcon ? "flex" : "initial"};
          align-items: center;
        }

        :active,
        :focus,
        :visited {
          color: inherit;
        }

        :hover {
          background-color: #efefef;
          border-radius: 6px;
          box-shadow: none;
        }

        @media (min-width: 768px) {
           {
            padding: 6px 10px;
          }
        }
      `}
    </style>
  </>
);
