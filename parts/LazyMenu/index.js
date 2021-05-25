
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
