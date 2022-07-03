import NextLink from 'next/link';
import css from 'styled-jsx/css';

function getLinkStyles({ isIcon, isSelected, isNormal }) {
  return css.resolve`
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

    a:active,
    a:focus,
    a:visited {
      color: inherit;
    }

    a:hover {
      background-color: #efefef;
      border-radius: 0.375rem;
      box-shadow: none;
    }

    @media (min-width: 48rem) {
      a {
        padding: ${isNormal ? '0' : '0.375rem 0.425rem'};
      }
    }
  `;
}

export const Link = ({
  children,
  href,
  ariaLabel,
  isIcon,
  isSelected,
  isNormal,
  as,
  ...props
}) => {
  const { className, styles } = getLinkStyles({ isIcon, isSelected, isNormal });

  return (
    <>
      <NextLink
        href={href}
        as={as}
        aria-label={ariaLabel}
        className={className}
        {...props}
      >
        {children}
      </NextLink>

      {styles}
    </>
  );
};
