
import PaginationWrapper from './PaginationWrapper';
import PaginationButton from './PaginationButton';

const PAGINATION_LAYOUT_TYPES = {
  LEFT_ONE: 'left-one',
  RIGHT_ONE: 'right-one',
  BOTH: 'both'
};

const PAGINATION_BEHAVIOR_TYPES ={
  PREV: 'prev',
  NEXT: 'next'
};

const Pagination = ({ page, totalPages }) => {
  if (totalPages === 1) {
    return null;
  }

  if (page < totalPages && page === 1) {
    return (
      <PaginationWrapper type={PAGINATION_LAYOUT_TYPES.RIGHT_ONE}>
        <PaginationButton
          page={page}
          type={PAGINATION_BEHAVIOR_TYPES.NEXT} />
      </PaginationWrapper>
    );
  } else if (page < totalPages) {
    return (
      <PaginationWrapper type={PAGINATION_LAYOUT_TYPES.BOTH}>
        <PaginationButton
          page={page}
          type={PAGINATION_BEHAVIOR_TYPES.PREV} />
        <PaginationButton
          page={page}
          type={PAGINATION_BEHAVIOR_TYPES.NEXT} />
      </PaginationWrapper>
    );
  } else {
    return (
      <PaginationWrapper type={PAGINATION_LAYOUT_TYPES.LEFT_ONE}>
        <PaginationButton
          page={page}
          type={PAGINATION_BEHAVIOR_TYPES.PREV} />
      </PaginationWrapper>
    );
  }
};

export {
  PAGINATION_LAYOUT_TYPES,
  PAGINATION_BEHAVIOR_TYPES
};

export default Pagination;
