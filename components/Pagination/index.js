
import PaginationWrapper from './PaginationWrapper';
import PaginationButton from './PaginationButton';
import CLASS_NAMES from 'utils/constants/class-names';

const PAGINATION_BEHAVIOR_TYPES = Object.freeze({
  PREV: 'prev',
  NEXT: 'next'
});

const Pagination = ({
  className,
  page,
  totalPages
}) => (
  <PaginationWrapper className={className}>
    <PaginationButton
      className={page > 1 ? CLASS_NAMES.VISIBLE : CLASS_NAMES.INVISIBLE}
      page={page}
      type={PAGINATION_BEHAVIOR_TYPES.PREV} />
    <PaginationButton
      className={page < totalPages ? CLASS_NAMES.VISIBLE : CLASS_NAMES.INVISIBLE}
      page={page}
      type={PAGINATION_BEHAVIOR_TYPES.NEXT} />
  </PaginationWrapper>
);

export {
  PAGINATION_BEHAVIOR_TYPES
};

export default Pagination;
