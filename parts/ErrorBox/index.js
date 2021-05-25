

import { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import clsx from 'clsx';

import clearError from 'actions/clearError';
import LinkButton from 'components/LinkButton';
import PageWrapper from 'parts/PageWrapper';
import withTheme from 'utils/hocs/withTheme';
import { ERROR_IMAGE_PATH } from 'utils/constants/image-paths';
import LINKS from 'utils/constants/links';
import HomeIcon from 'public/assets/svgs/icons/home.svg';
import QUERY_PARAMS from 'utils/constants/query-params';
import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';

const Title = ({
  theme,
  children
}) => (
  <>
    <h1 className='title'>{children}</h1>
    <style jsx>{`
      .title {
        color: var(--palette-text-primary);
        font-size: 3.75rem;
        font-weight: ${theme.typography.fontWeightLight};
      }
    `}</style>
  </>
);

const Subtitle = ({
  theme,
  children
}) => (
  <>
    <h2 className='subtitle'>{children}</h2>
    <style jsx>{`
      .subtitle {
        color: var(--palette-text-primary);
        font-size: 2.125rem;
        font-weight: ${theme.typography.fontWeightBold};
      }
    `}</style>
  </>
);

const ErrorImage = ({
  className,
  ...rest
}) => (
  <>
    <img
      width='1080'
      height='748'
      className={clsx('error-image', className)}
      {...rest} />
    <style jsx>{`
      .error-image {
        max-width: 100%;
        height: auto;
        margin-bottom: 6rem;
      }
    `}</style>
  </>
);

const ErrorBox = ({
  theme,
  statusCode
}) => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors);
  useEffect(() => {
    scroll.scrollToTop({smooth: true});

    return () => dispatch(clearError());
  }, [dispatch]);

  return (
    <>
      <PageWrapper className='error-box'>
        <Head>
          <title>Oooops!</title>
        </Head>
        <div className='title-section'>
          <Title theme={theme}>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </Title>
          <Subtitle theme={theme}>{errors?.data?.status_message}</Subtitle>
        </div>
        <ErrorImage
          src={ERROR_IMAGE_PATH}
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
            startIcon: (
              <HomeIcon
                fill='currentColor'
                width='1.125em' />
            ),
            title: 'Home'
          }} />
      </PageWrapper>
      <style jsx>{`
        :global(.page-wrapper.error-box) {
          width: 65%;
          display: grid;
          place-items: center;
        }

        .title-section {
          text-align: center;
          margin-bottom: 6rem;
        }

        @media ${theme.mediaQueries.medium} {
          :global(.page-wrapper.error-box) {
            width: 96%;
          }
        }
      `}</style>
    </>
  );
};

export default withTheme(ErrorBox);
