

import withTheme from 'utils/hocs/withTheme';

const InfoWrapper = ({
  theme,
  children
}) => (
  <>
    <div className='info-wrapper'>
      {children}
    </div>
    <style jsx>{`
      .info-wrapper {
        padding: 4rem;
      }

      @media ${theme.mediaQueries.largest} {
        .info-wrapper {
          padding: 3rem;
        }
      }

      @media ${theme.mediaQueries.large} {
        .info-wrapper {
          padding: 2rem;
        }
      }

      @media ${theme.mediaQueries.smaller} {
        .info-wrapper {
          padding: 1rem;
        }
      }

      @media ${theme.mediaQueries.smallest} {
        .info-wrapper {
          padding: 0rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(InfoWrapper);
