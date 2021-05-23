
const DetailsPanelWrapper = ({
  theme,
  children
}) => (
  <>
    <div>
      {children}
    </div>
    <style jsx>{`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 3rem;

      @media ${theme.mediaQueries.smaller} {
        padding: 1.5rem 1.5rem;
      }
    `}</style>
  </>
);

export default DetailsPanelWrapper;
