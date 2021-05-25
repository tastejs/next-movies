
const DETAILS_PANEL_WRAPPER = 'details-panel-wrapper';

const DetailsPanelWrapper = ({
  theme,
  children
}) => (
  <>
    <div className={DETAILS_PANEL_WRAPPER}>
      {children}
    </div>
    <style jsx>{`
      .${DETAILS_PANEL_WRAPPER} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 3rem;
      }

      @media ${theme.mediaQueries.smaller} {
        .${DETAILS_PANEL_WRAPPER} {
          padding: 1.5rem 1.5rem;
        }
      }
    `}</style>
  </>
);

export default DetailsPanelWrapper;
