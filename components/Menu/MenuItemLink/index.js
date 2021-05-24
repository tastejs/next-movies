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

const MenuItemLink = React.forwardRef(({
  theme,
  href,
  as,
  children,
  selected,
  ...rest
}, ref) => (
  <>
    <Link
      href={href}
      as={as}
      passHref>
      <a
        ref={ref}
        {...rest}>
        {children}
      </a>
    </Link>
    <style jsx>{`
      a {
        outline: none;
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
        font-weight: ${theme.typography.fontWeightBold};
        line-height: 1;
        color: ${selected ? 'var(--palette-secondary-main)' : 'var(--palette-primary-main)'};
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </>
));

export default withTheme(MenuItemLink);
