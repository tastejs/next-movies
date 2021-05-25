
import clsx from 'clsx';

const PageWrapper = ({
  className,
  children,
  ...rest
}) => (
  <>
    <div
      className={clsx('page-wrapper', className)}
      {...rest}>
      {children}
    </div>
    <style jsx>{`
      .page-wrapper {
        width: 100%;
      }
    `}</style>
  </>
);

export default PageWrapper;
