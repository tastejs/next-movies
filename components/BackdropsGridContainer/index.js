
const BackdropsGridContainer = ({
  theme,
  children
}) => (
  <>
    <div className='grid-container'>{children}</div>
    <style jsx>{`
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 4rem 2rem;
        justify-content: space-evenly;
        align-content: space-between;
        align-items: start;
        margin: 4rem 0;
      }
    
      @media ${theme.mediaQueries.small} {
        .grid-container {
          grid-template-columns: repeat(2, 1fr);
          justify-content: space-around;
          grid-gap: 4rem 1.5rem;
        }
      }
    
      @media ${theme.mediaQueries.smaller} {
        .grid-container {
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 4rem 1rem;
        }
      }
    `}</style>
  </>
);

export default BackdropsGridContainer;
