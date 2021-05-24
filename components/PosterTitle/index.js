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

const CLASS_NAME = 'poster-title';

const PosterTitle = ({
  theme,
  className,
  children,
  ...rest
}) => (
  <>
    <h2
      className={clsx(CLASS_NAME, className)}
      {...rest}>
      {children}
    </h2>
    <style jsx>{`
      .${CLASS_NAME} {
        text-align: center;
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightRegular};
        color: var(--palette-text-secondary);
        margin-bottom: 1rem;
        line-height: 1.4;
      }
    `}</style>
  </>
);

export default PosterTitle;
