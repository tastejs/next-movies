

import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';

const AppBar = ({
  theme,
  className = '',
  children
}) => (
  <>
    <header className={clsx('app-bar', className)}>
      <div className='toolbar'>
        {children}
      </div>
    </header>
    <style jsx>{`
      .app-bar {
        position: fixed;
        top: 0;
        left: auto;
        right: 0;
        width: 100%;
        z-index: ${theme.zIndex.appBar};
        box-shadow: ${theme.shadows[4]};
        background-color: var(--palette-background-paper);
        -webkit-tap-highlight-color: transparent;
      }

      .toolbar {
        min-height: 64px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between
      }

      @media ${theme.mediaQueries.small} {
        .toolbar {
          min-height: 56px;
          padding: 0 16px;
        }
      }

      @media ${theme.mediaQueries.smaller} {
        .app-bar {
          background-color: transparent;
        }
      }
    `}</style>
  </>
);

export default withTheme(AppBar);
