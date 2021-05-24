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

import clsx from 'clsx';

import Rating from 'components/Rating';
import Tooltip from 'components/UI/Tooltip';

const RatingInfo = ({
  className,
  voteAverage,
  tooltip
}) => (
  <>
    <div className={clsx('rating-info', className)}>
      <Rating voteAverage={voteAverage} />
      <Tooltip className='tooltip-position tooltip-show'>{tooltip}</Tooltip>
    </div>
    <style jsx>{`
      .rating-info {
        display: flex;
        position: relative;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      :global(.tooltip-position) {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .rating-info:hover :global(.tooltip-show) {
        visibility: visible;
      }
    `}</style>
  </>
);

export default RatingInfo;
