
import { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import clearError from 'actions/clearError';
import LinkButton from 'components/LinkButton';
import PageWrapper from 'parts/PageWrapper';
import withTheme from 'utils/hocs/withTheme';
import { ERROR_IMAGE_PATH } from 'utils/constants/image-paths';
import LINKS from 'utils/constants/links';
import HomeIcon from 'public/assets/svgs/icons/home.svg';

const Title = ({ children }) => (
  <>
    <h1 className='title'>{children}</h1>
    <style jsx>{`
      .title {
        color: var(--palette-text-primary);
        font-size: 3.5rem;
        font-weight: 300;
      }
    `}</style>
  </>
);

const Subtitle = ({ children }) => (
  <>
    <h2 className='subtitle'>{children}</h2>
    <style jsx>{`
      .subtitle {
        color: var(--palette-text-primary);
        font-size: 1.8rem;
        font-weight: 700;
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
      className={`error-image ${className}`}
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
      <PageWrapper className='page-wrapper-outer'>
        <Head>
          <title>Oooops!</title>
        </Head>
        <div className='title-section'>
          <Title>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </Title>
          <Subtitle>{errors?.data?.status_message}</Subtitle>
        </div>
        <ErrorImage
          src={ERROR_IMAGE_PATH}
          alt='Not found!' />
        <LinkButton
          href={LINKS.HOME.HREF}
          buttonProps={{
            left: true,
            contained: true,
            icon: (
              <HomeIcon
                fill='currentColor'
                width='1.125em' />
            ),
            title: 'Home'
          }} />
      </PageWrapper>
      <style jsx>{`
        :global(.page-wrapper.page-wrapper-outer) {
          width: 65%;
          align-items: center;
        }

        .title-section {
          text-align: center;
          margin-bottom: 6rem;
        }

        @media ${theme.mediaQueries.medium} {
          :global(.page-wrapper.page-wrapper-outer) {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default withTheme(ErrorBox);
