import { Metadata } from 'components/Metadata';
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
      <Metadata
        title={darkMode.value ? 'Dark Mode' : 'Light Mode'}
        description={darkMode.value ? 'Switch to light mode' : 'Switch to dark mode'}
        favicon={darkMode.value ? '/dark-favicon.ico' : '/light-favicon.ico'}
        appleTouchIcon={darkMode.value ? '/dark-apple-touch-icon.png' : '/light-apple-touch-icon.png'}
        manifest={darkMode.value ? '/dark-manifest.webmanifest' : '/light-manifest.webmanifest'}
        maskIcon={darkMode.value ? '/dark-safari-pinned-tab.svg' : '/light-safari-pinned-tab.svg'}
        msapplicationConfig={darkMode.value ? '/dark-browserconfig.xml' : '/light-browserconfig.xml'}
        themeColor={darkMode.value ? '#fafafa' : '#303030'}
      />
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