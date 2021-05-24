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

import Link from 'next/link';

import withTheme from 'utils/hocs/withTheme';

const PosterLink = React.forwardRef(({
  theme,
  href,
  as,
  children,
  ...rest
}, ref) => (
  <>
    <Link
      passHref
      as={as}
      href={href}>
      <a
        ref={ref}
        {...rest}>
        {children}
      </a>
    </Link>
    <style jsx>{`
      a {
        position: relative;
        display: flex;
        flex-direction: column;
        transition: transform ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut};
      }
    
      // TODO: could follow the practices for hover effect from https://web.dev/authors/addyosmani 
      a:hover {
        transform: scale(1.03);
      }

      a:hover::after {
        transform: scaleY(1);
      }
    
      a::after {
        content: '';
        position: absolute;
        z-index: -99;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleY(0);
        transform-origin: top;
        background-color: var(--palette-background-paper);
        box-shadow: ${theme.shadows[1]};
      }
    `}</style>
  </>
));

export default withTheme(PosterLink);
