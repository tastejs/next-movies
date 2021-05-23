
import { useState, useEffect } from 'react';

import GradientImageWrapper from 'parts/GradientImageWrapper';

const Image = ({
  gradientOverlayEnabled,
  style,
  gradientOverlayClass,
  className,
  loadingUI,
  placeholderPath,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    return () => setLoaded(false);
  }, []);

  const onImageLoadHandler = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && loadingUI}
      <GradientImageWrapper
        className={gradientOverlayClass}
        overlayEnabled={gradientOverlayEnabled}>
        <img
          {...rest}
          className={`img ${className}`}
          onLoad={onImageLoadHandler}
          onError={event => {
            setError(true);
            if (event.target.src !== placeholderPath) {
              event.target.src = placeholderPath;
            }
          }}
          style={{
            ...style,
            display: loaded ? 'block' : 'none'
          }} />
      </GradientImageWrapper>
      <style jsx>{`
        .img {
          object-fit: ${error ? 'contain' : 'cover'};
        }
      `}</style>
    </>
  );
};

export default Image;
