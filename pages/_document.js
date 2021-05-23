
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        {/* Adds an event listener to capture uncaught errors. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              addEventListener('error', window.__e=function f(e){f.q=f.q||[];f.q.push(e)});
            `
          }} />
        <script async src="https://www.google-analytics.com/analytics.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* TODO: transpile and minify base.js */}
          <script
            type='module'
            dangerouslySetInnerHTML={{
              __html: `
                import('/analytics/base.js').then(analytics => analytics.init());
              `
            }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
