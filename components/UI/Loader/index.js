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

const Loading = () => (
  <>
    <div className='loading' />
    <style jsx>{`
      .loading {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: var(--palette-primary-dark);
        box-shadow: -5rem 0rem 0rem var(--palette-primary-main);
        animation: circle-classic 1s ease-in-out infinite alternate;
  
        @keyframes circle-classic {
          0% {
            opacity: 0.1;
            transform: rotate(0deg) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: rotate(360deg) scale(1.2);
          }
        }
      }
    `}</style>
  </>
);

const Loader = ({
  className = '',
  centerViewport,
  centerRow
}) => (
  <>
    <div
      className={
        clsx(
          'loader',
          {'center-viewport': centerViewport},
          {'center-row': centerRow},
          className
        )
      }>
      <Loading />
    </div>
    <style jsx>{`
      .loader {
        display: grid;
        place-items: center;
        min-width: 150px;
        min-height: 150px;
      }
      .center-viewport {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .center-row {
        width: 100%;
      }
    `}</style>
  </>
);

export default Loader;
