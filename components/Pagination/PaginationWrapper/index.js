
import { PAGINATION_LAYOUT_TYPES } from '../';

const PaginationWrapper = ({
  type,
  children
}) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      display: flex;
      align-items: center;
      justify-content: ${type === PAGINATION_LAYOUT_TYPES.LEFT_ONE ? (
        'flex-start'
      ) : (
        type === PAGINATION_LAYOUT_TYPES.BOTH
          ? 'space-between'
          : 'flex-end'
      )}
    `}</style>
  </>
);

export default PaginationWrapper;
