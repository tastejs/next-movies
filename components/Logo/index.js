
import Link from 'next/link';

import LINKS from 'utils/constants/links';

const Logo = () => (
  <>
    <Link href={LINKS.HOME.HREF}>
      <a>
        <img
          className='logo-img'
          src='/assets/svgs/logo.svg'
          alt='two girls' />
      </a>
    </Link>
    <style jsx>{`
      a {
        width: 100%;
        height: 18rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-bottom: 2rem;
      }

      .logo-img {
        max-width: 75%;
      }
    `}</style>
  </>
);

export default Logo;
