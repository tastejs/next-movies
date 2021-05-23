
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
        max-width: 60%;
        width: 100%;
        padding: 4rem;
        // TODO: do we need?
        // flex: 1 1 60%;
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

      @media ${theme.mediaQueries.medium} {
        .info-wrapper {
          max-width: 100%;
          // TODO: do we need?
          // flex: 1 1 100%;
        }
      }
    `}</style>
  </>
);

export default withTheme(InfoWrapper);
