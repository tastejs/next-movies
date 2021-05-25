

import IntroImage from './IntroImage';
import withTheme from 'utils/hocs/withTheme';
import AspectRatioBox from 'components/UI/AspectRatioBox';

const Artwork = ({
  theme,
  width,
  height,
  src
}) => (
  <>
    <div className='artwork'>
      <AspectRatioBox aspectRatio={width / height}>
        <IntroImage
          src={src}
          width={width}
          height={height} />
      </AspectRatioBox>
    </div>
    <style jsx>{`
      .artwork {
        padding: 4rem;
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

      @media ${theme.mediaQueries.smaller} {
        .artwork {
          padding: 0;
          margin-top: -102px;
        }
      }
    `}</style>
  </>
);

export default withTheme(Artwork);
