
const PageWrapper = ({
  className,
  children,
  ...rest
}) => (
  <>
    <div
      className={`page-wrapper ${className}`}
      {...rest}>
      {children}
    </div>
    {/* TODO: we can drop but confirm first */}
    <style jsx>{`
      .page-wrapper {
        display: flex;
        width: 100%;
        flex-direction: column;
      }
    `}</style> 
  </>
);

export default PageWrapper;
