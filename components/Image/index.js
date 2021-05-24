/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useState, useEffect } from 'react';
import clsx from 'clsx';

import GradientImageWrapper from 'parts/GradientImageWrapper';

const Image = ({
  style,
  className,
  loadingUI,
  placeholderPath,
  gradientOverlayEnabled,
  overlayClass,
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
      {/* TODO: it heavily depends on JS -> would be better to go with HTML and CSS */}
      {!loaded && loadingUI}
      <GradientImageWrapper
        className={overlayClass}
        overlayEnabled={gradientOverlayEnabled}>
        <img
          className={clsx('img', className)}
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
          }}
          {...rest} />
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
