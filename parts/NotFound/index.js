

import PageWrapper from 'parts/PageWrapper';
import TitleSection from './TitleSection';
import NotFoundImage from './NotFoundImage';
import LinkButton from 'components/LinkButton';
import LINKS from 'utils/constants/links';
import withTheme from 'utils/hocs/withTheme';
import HomeIcon from 'public/assets/svgs/icons/home.svg';
import QUERY_PARAMS from 'utils/constants/query-params';
import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';

const NotFound = ({
  theme,
  title,
  subtitle
}) => (
  <>
    <PageWrapper className='not-found'>
      <TitleSection
        theme={theme}
        title={title}
        subtitle={subtitle} />
      <NotFoundImage
        src='/assets/svgs/empty.svg'
        alt='Not found!' />
      <LinkButton
        href={{
          pathname: LINKS.HOME.HREF,
          query: {
            [QUERY_PARAMS.CATEGORY]: STATIC_MOVIE_CATEGORIES[0].name,
            [QUERY_PARAMS.PAGE]: 1
          }
        }}
        buttonProps={{
          contained: true,
          title: 'Home',
          startIcon: (
            <HomeIcon
              fill='currentColor'
              width='1.125em' />
          )
        }} />
    </PageWrapper>
    <style jsx>{`
      :global(.not-found) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media ${theme.mediaQueries.medium} {
        :global(.not-found) {
          width: 65%;
        }
      }
    `}</style>
  </>
);

export default withTheme(NotFound);
