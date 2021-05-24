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

// MEMO: inspired by https://codepen.io/JacobLett/pen/dOYxJb?__cf_chl_jschl_tk__=c391dfe232eda92d5d33fbfc5439f0a98fdf90eb-1596024692-0-AT99o8yy8ysVOCHkWgUDFbCVee3D1WVl3J8jbf5TeZnBZpxAUh_p80LpzvoZP_SIxX7q0XKoC7wVIsREtarTHzr-XBVErcv09tcL-mSfjAIUhj_859E6ReC5LsBCfp-JAw6AozxaCmx4vauJppTqUXVWlr9v5Cs4bCLfjKudXiabstd-T0wvFYP2FVKg-JoI3edRXIkAa8wWoJyfyqrhWsxRQwVjXSUXA4dSy_hgSki21ApIpUxZIXBcRlIQKQWWmDg_dfsS-5M5WUcpD-Is11ooa39frB0azajOk41pk_iS2gMoM0riuypbn4GY8rWqrSYYb5oNSjQcWHb5GI31DBrEYMX-Zrc_4MmAlSud6ewB
const GradientImageWrapper = ({
  className = '',
  children,
  overlayEnabled,
  ...rest
}) => (
  <>
    {overlayEnabled ? (
      <>
        <div
          className={clsx('gradient', className)}
          {...rest}>
          {children}
        </div>
        <style jsx>{`
          .gradient {
            position: relative;
          }

          .gradient::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: inline-block;
            background-image: var(--background-blend-gradient);
          }

          :global(.gradient .img) {
            display: block;
          }
        `}</style>
      </>
    ) : (
      <>
        {children}
      </>
    )}
  </>
);

export default GradientImageWrapper;
