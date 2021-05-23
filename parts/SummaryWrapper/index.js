
import LazyLoad from 'react-lazyload';

import withTheme from 'utils/hocs/withTheme';

const SummaryWrapper = ({
  theme,
  children
}) => (
  <>
    <LazyLoad height={500}>
      <div className='summary-wrapper'>
        {children}
      </div>
    </LazyLoad>
    <style jsx>{`
      .summary-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
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
          flex-direction: column;
          margin-bottom: 5rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(SummaryWrapper);
