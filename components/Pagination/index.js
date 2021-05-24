/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
