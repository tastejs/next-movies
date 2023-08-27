import { NextSeo } from 'next-seo';

import { LOGO_IMAGE_PATH, DARK_TMDB_IMAGE_PATH, LIGHT_TMDB_IMAGE_PATH } from 'utils/constants/image-paths';

const MyHead = ({ children }) => (
  <>
    <NextSeo
      openGraph={{
        images: [
          {
            url: LOGO_IMAGE_PATH,
            width: 1200,
            height: 630,
            alt: 'Logo',
          },
          {
            url: DARK_TMDB_IMAGE_PATH,
            width: 1200,
            height: 630,
            alt: 'Dark Image',
          },
          {
            url: LIGHT_TMDB_IMAGE_PATH,
            width: 1200,
            height: 630,
            alt: 'Light Image',
          },
        ],
      }}
    />
    {children}
  </>
);

export default MyHead;