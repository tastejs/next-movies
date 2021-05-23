
import Head from 'next/head';
// import Script from 'utils/hocs/Script';

export default ({
  children
}) => (
  <Head>
    <meta charSet='utf-8' />
    <meta name='supported-color-schemes' content='dark light' />
    <meta name='color-scheme' content='dark light' />
    <meta name='theme-color' content='' />
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
    {/* The main stylesheet */}
    <link
      rel='stylesheet'
      href='/assets/css/style.css' />
    {children}
    {/* TODO: update URLs properly */}
    <link
      rel='manifest'
      href='/manifest-light.webmanifest'
      data-href-light='/manifest-light.webmanifest'
      data-href-dark='/manifest-dark.webmanifest' />
    <link
      rel='icon'
      href='https://cdn.glitch.com/791b2241-459b-4a2e-8cca-c0fdc21f0487%2Flight.png'
      data-href-light='https://cdn.glitch.com/791b2241-459b-4a2e-8cca-c0fdc21f0487%2Flight.png'
      data-href-dark='https://cdn.glitch.com/791b2241-459b-4a2e-8cca-c0fdc21f0487%2Fdark.png'
      sizes='144x144' />
  </Head>
);
