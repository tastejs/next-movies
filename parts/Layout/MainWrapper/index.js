
const MainWrapper = ({
  theme,
  children
}) => (
  <>
    <div className='main-wrapper'>
      {children}
    </div>
    <style jsx>{`
      .main-wrapper {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        // TODO: do we need?
        width: 100%;
        height: 100%;
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
