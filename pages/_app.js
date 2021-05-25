

import { Provider } from 'react-redux';
import globalStyles from 'styles/global';

import { useStore } from 'store';
import ThemeProvider from 'utils/hocs/ThemeProvider';
import Layout from 'parts/Layout';
import { AuthProvider } from 'utils/hocs/AuthProvider';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default MyApp;
