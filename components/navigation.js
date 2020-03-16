import Link from 'next/href';

const LinkPage = ({ title, href }) => (
  <div>
    <Link href={href}>
      <a>{title}</a>
    </Link>
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
          margin: 0 5px;
          padding: 6px 10px;
        }
        a:hover {
          background: #efefef;
        }
      }
    `}</style>
  </div>
);

export default () => (
  <nav>
    <ul>
      <li>
        <LinkPage
          title={'Thoughts'}
          href={'https://twitter.com/murillodmiranda'}
        />
      </li>
      <li>
        <LinkPage title={'Code'} href={'https://github.com/murillo94'} />
      </li>
      <li>
        <LinkPage
          title={'Visuals'}
          href={'https://dribbble.com/murillodmiranda'}
        />
      </li>
      <li>
        <LinkPage title={'Essays'} href={'/essays'} />
      </li>
      <li>
        <LinkPage title={'Resume'} href={'/resume'} />
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
        width: 100%;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
      }

      ul {
        padding: 0;
        margin: 0;
      }

      li {
        display: inline-block;
      }

      @media (max-width: 767px) {
        nav {
          text-align: left;
        }

        li {
          display: block;
          margin: 22px 0;
        }
      }
    `}</style>
  </nav>
);
