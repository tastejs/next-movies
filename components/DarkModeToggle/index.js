
// MEMO: inspired by https://web.dev/prefers-color-scheme/#the-lessdark-mode-togglegreater-custom-element
import { useEffect, memo } from 'react';

import withTheme from 'utils/hocs/withTheme';

const DarkModeToggle = ({ theme }) => {
  /**
   * MEMO: we should make sure that the custom element gets in the DOM by the time the "dark-mode-toggle" script is loaded.
   * so we should use mounted option of the useEffect hook for safety instead of useScript hook
   */
  useEffect(() => {
    (async () => {
      // TODO: "await import('https://unpkg.com/dark-mode-toggle');" as documented at the README is not working

      // TODO: potential npm package use
      (() => {
        const desiredSource = 'https://unpkg.com/dark-mode-toggle';
        const scripts = document.getElementsByTagName('script');
        let alreadyLoaded = false;
    
        if (scripts.length) {
          for(const scriptIndex in scripts) {
            if(!alreadyLoaded && scripts[scriptIndex].src && scripts[scriptIndex].src.includes(desiredSource)) {
              alreadyLoaded = true;
            }
          }
        }
        if (!alreadyLoaded) {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = desiredSource;
          document.body.appendChild(script);
        }
      })();

      if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
        // alert('Your browser does not support the `prefers-color-scheme` media query.');
      }
      
      /**
       * MEMO: inspired by https://github.com/GoogleChromeLabs/dark-mode-toggle#-using-a-css-class-that-you-toggle.
       * here is another similar approach https://github.com/donavon/use-dark-mode and looks better for now.
       */
      const darkModeToggle = document.querySelector('dark-mode-toggle');
      const body = document.body;
      // MEMO: set or remove the "dark" class the first time.
      darkModeToggle.mode === 'dark' ? body.classList.add('dark') : body.classList.remove('dark');

      const manifests = document.querySelectorAll('link[rel="manifest"]');
      const favicons = document.querySelectorAll('link[rel="icon"]');
      const themeColor = document.querySelector('meta[name="theme-color"]');

      const toggleTheme = event => {
        const darkModeOn = event.detail.colorScheme === 'dark' ? true : false;
        manifests.forEach(link => {
          link.href = darkModeOn ? link.dataset.hrefDark : link.dataset.hrefLight;
        });
        favicons.forEach(link => {
          link.href = darkModeOn ? link.dataset.hrefDark : link.dataset.hrefLight;
        });
        // TODO: properly configure
        themeColor.content = darkModeOn ? 'black' : 'white';

        /**
         * MEMO: listen for toggle changes (which includes "prefers-color-scheme" changes)
         * and toggle the "dark" class accordingly.
         */
        body.classList.toggle('dark', darkModeToggle.mode === 'dark');
      };

      document.addEventListener('colorschemechange', toggleTheme);
      toggleTheme({detail: {colorScheme: darkModeToggle.mode}});

      return () => {
        document.removeEventListener('colorschemechange', toggleTheme);
      };
    })();
  }, []);

  return (
    <>
      <div className='dark-mode-toggle-container'>
        <dark-mode-toggle
          class='dark-mode-toggle'
          appearance='toggle' />
      </div>
      <style jsx>{`
        // MEMO: reserve the space in order to prevent layout-shifting
        .dark-mode-toggle-container {
          display: inline-flex;
          min-width: 58.58px;
          min-height: 42.53px;
          margin-bottom: -0.475em;
          margin-right: -12px;
          padding-left: 8px;
        }

        :global(.dark-mode-toggle) {
          --dark-mode-toggle-dark-icon: url("/assets/svgs/sun.svg");
          --dark-mode-toggle-light-icon: url("/assets/svgs/moon.svg");
          --dark-mode-toggle-icon-size: 3.5rem;
          --dark-mode-toggle-icon-filter: invert(100%);
        }

        // MEMO: tuned the dark-mode-toggle element's position
        @media ${theme.mediaQueries.large} {
          :global(.dark-mode-toggle) {
            --dark-mode-toggle-icon-size: 2.5rem;
          }

          .dark-mode-toggle-container {
            min-width: 43.59px;
            min-height: 31.89px;
            margin-bottom: -0.5em;
            margin-right: -8px;
            padding-left: 4px;
          }
        }
      `}</style>
    </>
  );
};

export default memo(withTheme(DarkModeToggle));
