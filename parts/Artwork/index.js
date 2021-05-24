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
