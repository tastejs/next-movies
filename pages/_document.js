

import Document, { Html, Head, Main, NextScript } from 'next/document';

import Script from 'utils/hocs/Script';
import CLASS_NAMES from 'utils/constants/class-names';
import { mediaStyles } from 'utils/helpers/media';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='supported-color-schemes' content='dark light' />
          <meta name='color-scheme' content='dark light' />
          {/**
           * MEMO: inspired by https://web.dev/prefers-color-scheme/#activating-dark-mode-in-the-operating-system.
           * for now we take the approach https://github.com/GoogleChromeLabs/dark-mode-toggle#-using-a-css-class-that-you-toggle
           * as it's not supported in SSR environment.
           */}
          {/* <Script>
            {() => {
              // If `prefers-color-scheme` is not supported, fall back to light mode.
              // In this case, light.css will be downloaded with `highest` priority.
              if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
                document.documentElement.style.display = 'none';
                document.head.insertAdjacentHTML(
                  'beforeend',
                  '<link rel="stylesheet" href="/assets/css/light.css" onload="document.documentElement.style.display = \'\'">'
                );
              }
            }}
          </Script> */}
          {/* MEMO: inspired by https://web.dev/prefers-color-scheme/#loading-strategy */}
          {/*
            Conditionally either load the light or the dark stylesheet. The matching file
            will be downloaded with `highest`, the non-matching file with `lowest`
            priority. If the browser doesn't support `prefers-color-scheme`, the media
            query is unknown and the files are downloaded with `lowest` priority (but
            above I already force `highest` priority for my default light experience).
          */}
          {/* <link
            rel='stylesheet'
            href='/assets/css/dark.css'
            media='(prefers-color-scheme: dark)' />
          <link
            rel='stylesheet'
            href='/assets/css/light.css'
            media='(prefers-color-scheme: light)' /> */}

          {/* Primary Meta Tags */}
          <meta name='title' content='Next.js Movies' />
          <meta name='description' content='The Movies App is a non-trivial demo application built on top of the TMDB (The Movie Database) API' />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://movies.zaps.dev' />
          <meta property='og:title' content='Next.js Movies' />
          <meta property='og:description' content='The Movies App is a non-trivial demo application built on top of the TMDB (The Movie Database) API' />
          <meta property='og:image' content='https://movies.zaps.dev/movies-meta-image.jpg' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='628' />

          {/* Twitter */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://movies.zaps.dev' />
          <meta property='twitter:title' content='Next.js Movies' />
          <meta property='twitter:description' content='The Movies App is a non-trivial demo application built on top of the TMDB (The Movie Database) API' />
          <meta property='twitter:image' content='https://movies.zaps.dev/movies-meta-image.jpg' />

          <style
            type='text/css'
            dangerouslySetInnerHTML={{__html: mediaStyles}} />
          {/* Adds an event listener to capture uncaught errors. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                addEventListener('error', window.__e=function f(e){f.q=f.q||[];f.q.push(e)});
              `
            }} />
          {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
        </Head>
        <body className={CLASS_NAMES.LIGHT}>
          {/* MEMO: inspired by https://github.com/donavon/use-dark-mode#that-flash */}
          <Script>
            {() => {
              // Insert this script in your index.html right after the <body> tag.
              // This will help to prevent a flash if dark mode is the default.

              (function() {
                // Change these if you use something different in your hook.
                var storageKey = 'darkMode';
                var classNameDark = 'dark';
                var classNameLight = 'light';

                function setClassOnDocumentBody(darkMode) {
                  document.body.classList.add(darkMode ? classNameDark : classNameLight);
                  document.body.classList.remove(darkMode ? classNameLight : classNameDark);
                }
                
                var preferDarkQuery = '(prefers-color-scheme: dark)';
                var mql = window.matchMedia(preferDarkQuery);
                var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                var localStorageTheme = null;
                try {
                  localStorageTheme = localStorage.getItem(storageKey);
                } catch (err) {}
                var localStorageExists = localStorageTheme !== null;
                if (localStorageExists) {
                  localStorageTheme = JSON.parse(localStorageTheme);
                }

                // Determine the source of truth
                if (localStorageExists) {
                  // source of truth from localStorage
                  setClassOnDocumentBody(localStorageTheme);
                } else if (supportsColorSchemeQuery) {
                  // source of truth from system
                  setClassOnDocumentBody(mql.matches);
                  localStorage.setItem(storageKey, mql.matches);
                } else {
                  // source of truth from document.body
                  var isDarkMode = document.body.classList.contains(classNameDark);
                  localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                }
              })();
            }}
          </Script>
          <Main />
          <NextScript />
          {/* TODO: transpile */}
          <script
            type='module'
            dangerouslySetInnerHTML={{
              __html: `
                import('/analytics/base.min.js').then(analytics => analytics.init());
              `
            }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
