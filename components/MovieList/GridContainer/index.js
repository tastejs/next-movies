
const GridContainer = ({
  theme,
  children
}) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
      justify-content: space-evenly;
      align-content: space-between;
      align-items: start;
      padding: 4rem 0;
      grid-gap: 4rem 2rem;
    
      @media ${theme.mediaQueries.small} {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 23rem));
        justify-content: space-around;
        grid-gap: 4rem 1.5rem;
      }
    
      @media ${theme.mediaQueries.smaller} {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 18rem));
        grid-gap: 4rem 1rem;
      }
    `}</style>
  </>
);

export default GridContainer;
