
import clsx from 'clsx';

const MainWrapper = ({
  theme,
  className = '',
  children
}) => (
  <>
    <div className={clsx('main-wrapper', className)}>
      {children}
    </div>
    <style jsx>{`
      .main-wrapper {
        position: relative;
        display: flex;
        align-items: flex-start;
        user-select: none;
      }

      @media ${theme.mediaQueries.large} {
        .main-wrapper {
          flex-direction: column;
        }
      }
    `}</style>
  </>
);

export default MainWrapper;
