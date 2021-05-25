

import LazyLoad from 'react-lazyload';

import withTheme from 'utils/hocs/withTheme';

const SummaryWrapper = ({
  theme,
  children
}) => (
  <>
    {/* TODO: double check if we really need LazyLoad */}
    <LazyLoad height={500}>
      <div className='summary-wrapper'>
        {children}
      </div>
    </LazyLoad>
    <style jsx>{`
      .summary-wrapper {
        display: grid;
        grid-template-columns: 40% 60%;
        max-width: 120rem;
        margin: 0 auto;
        margin-bottom: 7rem;
      }

      @media ${theme.mediaQueries.largest} {
        .summary-wrapper {
          max-width: 105rem;
        }
      }

      @media ${theme.mediaQueries.larger} {
        .summary-wrapper {
          max-width: 110rem;
          margin-bottom: 6rem;
        }
      }

      @media ${theme.mediaQueries.large} {
        .summary-wrapper {
          max-width: 110rem;
          margin-bottom: 5rem;
        }
      }

      @media ${theme.mediaQueries.medium} {
        .summary-wrapper {
          display: block;
          grid-template-columns: unset;
          margin-bottom: 5rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(SummaryWrapper);
