

// MEMO: inspired by https://web.dev/prefers-color-scheme/#the-lessdark-mode-togglegreater-custom-element
import Head from 'next/head';
import clsx from 'clsx';
import useDarkMode from 'use-dark-mode';

import Toggle from 'components/UI/Toggle';
import CLASS_NAMES from 'utils/constants/class-names';
import withTheme from 'utils/hocs/withTheme';

const DarkModeToggle = ({
  theme,
  id,
  className
}) => {
  const darkMode = useDarkMode(false, {
    classNameDark: CLASS_NAMES.DARK,
    classNameLight: CLASS_NAMES.LIGHT
  });

  return (
    <>
      <Head>
        {darkMode.value ? (
          <>
            {/* TODO: block for now for toggle experience of the favicon depending on the light/dark mode */}
            {/* <link
              rel='icon'
              href='/dark-favicon.ico' /> */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/dark-apple-touch-icon.png' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/dark-favicon-32x32.png' />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/dark-favicon-16x16.png' />
            <link
              rel='manifest'
              href='/dark-manifest.webmanifest' />
            <link
              rel='mask-icon'
              href='/dark-safari-pinned-tab.svg'
              color='#5bbad5' />
            <meta
              name='msapplication-TileColor'
              content='#da532c' />
            {/* TODO: hardcoded */}
            <meta name='theme-color' content='#fafafa' />
            <meta
              name='msapplication-config'
              content='/dark-browserconfig.xml' />
          </>
        ) : (
          <>
            {/* TODO: block for now for toggle experience of the favicon depending on the light/dark mode */}
            {/* <link
              rel='icon'
              href='/light-favicon.ico' /> */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/light-apple-touch-icon.png' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/light-favicon-32x32.png' />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/light-favicon-16x16.png' />
            <link
              rel='manifest'
              href='/light-manifest.webmanifest' />
            <link
              rel='mask-icon'
              href='/light-safari-pinned-tab.svg'
              color='#5bbad5' />
            <meta
              name='msapplication-TileColor'
              content='#da532c' />
            {/* TODO: hardcoded */}
            <meta name='theme-color' content='#303030' />
            <meta
              name='msapplication-config'
              content='/light-browserconfig.xml' />
          </>
        )}
      </Head>
      <div className={clsx('dark-mode-toggle', className)}>
        <button
          type='button'
          onClick={darkMode.disable}>
          ☀
        </button>
        <Toggle
          id={id}
          checked={darkMode.value}
          onChange={darkMode.toggle} />
        <button
          type='button'
          onClick={darkMode.enable}>
          ☾
        </button>
      </div>
      <style jsx>{`
        .dark-mode-toggle {
          display: flex;
        }

        .dark-mode-toggle > button {
          font-size: 2.125rem;
          background: none;
          border: none;
          line-height: 0;
          color: #ffb74d;
          cursor: pointer;
          transition: color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
        }

        .dark-mode-toggle > button:last-child {
          color: #666;
        }
    
        .dark-mode-toggle > button:focus {
          outline: none;
        }

        :global(body.dark) .dark-mode-toggle > button {
          color: #999;
        }
        
        :global(body.dark) .dark-mode-toggle > button:last-child {
          color: lightblue;
        }
      `}</style>
    </>
  );
};

export default withTheme(DarkModeToggle);
