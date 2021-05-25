
const ContentWrapper = ({
  theme,
  children
}) => (
  <>
    <div className='content-wrapper'>
      {children}
    </div>
    <style jsx>{`
      .content-wrapper {
        width: 100%;
        min-height: 100vh;
  
        display: flex;
        align-items: center;
        flex-direction: column;
  
        padding-top: 6rem;
        padding-bottom: 6rem;
      }
      
      @media ${theme.mediaQueries.larger} {
        .content-wrapper {
          padding-top: 72px;
          padding-bottom: 6rem;
        }
      }

      @media ${theme.mediaQueries.large} {
        .content-wrapper {
          padding-top: 72px;
          padding-bottom: 4rem;
        }
      }
    `}</style>
  </>
);

export default ContentWrapper;
