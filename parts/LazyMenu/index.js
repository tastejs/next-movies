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

import loadable from '@loadable/component';
// MEMO: bundle size gets bigger than using @loadable/component
// import dynamic from 'next/dynamic';
// MEMO: bundle size gets bigger than using react-lazyload and warnings relevant to hydration mismatching due to Client side Intersection Observer API
// import loadableVisibility from 'react-loadable-visibility/loadable-components';

import LazyLoadingErrorBoundary from 'utils/hocs/LazyLoadingErrorBoundary';

const Menu = loadable(
  () => import(/* webpackChunkName: "menu" */ 'components/Menu'), {
    fallback: <div>Loading...</div>,
    ssr: false
  }
);

// const Menu = loadableVisibility(
//   () => import(/* webpackChunkName: "menu" */ 'components/Menu'), {
//     fallback: <div>Loading...</div>,
//     ssr: false
//   }
// );

// const Menu = dynamic(() => import(/* webpackChunkName: "menu" */ 'components/Menu'), {
//   loading: () => <div>Loading...</div>,
//   // TODO: with the following option, search term gets missed when refreshing once more after search results are fetched.
//   ssr: false
// });

const LazyMenu = props => (
  <LazyLoadingErrorBoundary>
    <Menu {...props} />
  </LazyLoadingErrorBoundary>
);

export default LazyMenu;
