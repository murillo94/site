import { default as LinkNext } from 'next/link';

export const Link = ({
  children,
  href,
  ariaLabel,
  isExternal,
  isIcon,
  isSelected,
  isNormal,
  as
}) => (
  <>
    {isExternal ? (
      <a
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <LinkNext href={href} as={as}>
        <a aria-label={ariaLabel}>{children}</a>
      </LinkNext>
    )}

    <style jsx>
      {`
        a {
          color: inherit;
          text-decoration: ${isNormal ? 'underline' : 'none'};
          border-radius: ${isSelected ? '0.375rem 0.375rem 0 0' : '0.375rem'};
          box-shadow: ${isSelected ? '0 0.0625rem 0 0 currentColor' : 'none'};
          padding: ${isNormal ? '0' : '0.3125rem'};
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
            padding: ${isNormal ? '0' : '0.375rem 0.425rem'};
          }
        }
      `}
    </style>
  </>
);
