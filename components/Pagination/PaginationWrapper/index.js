

import clsx from 'clsx';

const PaginationWrapper = ({
  className = '',
  children
}) => (
  <>
    <div className={clsx('pagination-wrapper', className)}>{children}</div>
    <style jsx>{`
      .pagination-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </>
);

export default PaginationWrapper;
