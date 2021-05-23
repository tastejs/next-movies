
const ContentWrapper = ({
  theme,
  children
}) => (
  <>
    <div>
      {children}
    </div>
    <style jsx>{`
      width: 100%;
      height: 100%;
      min-height: 100vh;

      // TODO: we can drop but confirm first
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 6rem 4rem;
    
      @media ${theme.mediaQueries.large} {
        padding: 4rem 2rem;
      }

      @media ${theme.mediaQueries.larger} {
        padding: 6rem 3rem;
      }
    `}</style>
  </>
);

export default ContentWrapper;
