

import LazyLoad from 'react-lazyload';

import Scenery from 'components/Scenery';
import PosterTitle from 'components/PosterTitle';
import {
  W355_AND_H200_BESTV2,
  // W710_AND_H400_BESTV2
} from 'config/image-sizes';

/**
 * TODO:
 * Should use srcset approach to serve responsive images. Re: https://web.dev/serve-responsive-images/
 */

const SCENERY_CONTAINER_CLASS_NAME = 'scenery-container';
const GRAY_FILTERED_CLASS_NAME = 'gray-filtered';

const ChooseImageItem = ({
  theme,
  movie,
  baseUrl,
  text,
  textAlwaysVisible,
  ...rest
}) => (
  <>
    <LazyLoad
      height={200}
      offset={200}>
      <button
        className={SCENERY_CONTAINER_CLASS_NAME}
        {...rest}>
        <Scenery
          overlayClass={GRAY_FILTERED_CLASS_NAME}
          width={W355_AND_H200_BESTV2.WIDTH}
          height={W355_AND_H200_BESTV2.HEIGHT}
          // TODO: placeholder is broken with it
          // srcSet={`${baseUrl}/${W355_AND_H200_BESTV2.FULL}${movie.backdrop_path} 1x, ${baseUrl}/${W710_AND_H400_BESTV2.FULL}${movie.backdrop_path} 2x`} 
          src={`${baseUrl}${W355_AND_H200_BESTV2.FULL}${movie.backdrop_path}`} />
        <h2>{text}</h2>
      </button>
      <PosterTitle
        // TODO: hack for UI adjusting
        style={{
          marginTop: '1.5rem'
        }}
        theme={theme}>
        {movie.title}
      </PosterTitle>
    </LazyLoad>
    <style jsx>{`
      .${SCENERY_CONTAINER_CLASS_NAME} {
        position: relative;
        width: 100%;
        border: none;
      }

      .${SCENERY_CONTAINER_CLASS_NAME} > h2 {
        opacity: ${textAlwaysVisible ? '1' : '0'};
        visibility: ${textAlwaysVisible ? 'visible' : 'hidden'};
        position: absolute;
        top: 50%;
        transform: translate(0%, -50%);
        width: 100%;
        min-height: 40px;
        color: var(--palette-text-primary);
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightBold};
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--palette-custom-tmdbLightBlue);
        transition: ${theme.transitions.duration.shorter}ms;
      }

      .${SCENERY_CONTAINER_CLASS_NAME}:hover > h2 {
        opacity: 1;
        visibility: visible;
      }

      .${SCENERY_CONTAINER_CLASS_NAME}:disabled, .${SCENERY_CONTAINER_CLASS_NAME} {
        color: inherit;
        background-color: inherit;
      }

      :global(.${GRAY_FILTERED_CLASS_NAME}:hover) {
        filter: grayscale(100%);
        transition: filter ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut};
      }
    `}</style>
  </>
);

export default ChooseImageItem;
