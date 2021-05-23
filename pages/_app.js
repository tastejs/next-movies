
// TODO: drop with react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// TODO: drop with react-modal-video
import 'react-modal-video/css/modal-video.min.css';

import globalStyles from 'styles/global';
import ThemeProvider from 'utils/hocs/ThemeProvider';
import { wrapper } from 'store';
import Layout from 'parts/Layout';

const MyApp = ({ Component, pageProps }) => (
  <>
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    <style jsx global>
      {globalStyles}
    </style>
  </>
);

// TODO: Memoize Redux selectors (with reselect for example) from https://houssein.me/progressive-react 
export default wrapper.withRedux(MyApp);
