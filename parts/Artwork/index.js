
import IntroImage from './IntroImage';
import withTheme from 'utils/hocs/withTheme';

const Artwork = ({
  theme,
  src
}) => (
  <>
    <div className='artwork'>
      <IntroImage src={src} />
    </div>
    <style jsx>{`
      .artwork {
        padding: 4rem;
        max-width: 40%;
        width: 100%;
        // TODO: do we need?
        // flex: 1 1 40%;
      }

      @media ${theme.mediaQueries.largest} {
        .artwork {
          padding: 3rem;
        }
      }

      @media ${theme.mediaQueries.large} {
        .artwork {
          padding: 2rem;
        }
      }

      @media ${theme.mediaQueries.medium} {
        .artwork {
          max-width: 60%;
          // TODO: do we need?
          // flex: 1 1 60%;
        }
      }

      @media ${theme.mediaQueries.smaller} {
        .artwork {
          margin-bottom: 2rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(Artwork);
