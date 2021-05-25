
const ActionsWrapper = ({
  children,
  ...rest
}) => (
  <>
    <div {...rest}>
      {children}
    </div>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
      }
      
      div > :global(:not(:first-child)) {
        margin-left: 8px;
      }
    `}</style>
  </>
);

export default ActionsWrapper;
