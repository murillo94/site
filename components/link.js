import { default as LinkNext } from 'next/link';

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
          border-radius: ${isSelected ? '0.375rem 0.375rem 0 0' : '0.375rem'};
          box-shadow: ${isSelected ? '0 0.0625rem 0 0 currentColor' : 'none'};
          padding: 0.3125rem;
          transition: background-color 0.1s;
          display: ${isIcon ? 'flex' : 'initial'};
          align-items: center;
        }

        :active,
        :focus,
        :visited {
          color: inherit;
        }

        :hover {
          background-color: #efefef;
          border-radius: 0.375rem;
          box-shadow: none;
        }

        @media (min-width: 48rem) {
           {
            padding: 0.375rem 0.625rem;
          }
        }
      `}
    </style>
  </>
);
