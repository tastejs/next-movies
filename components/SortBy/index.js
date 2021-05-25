

import TheSelectSearch from 'components/UI/TheSelectSearch';
import { SORT_BY_OPTIONS } from 'utils/constants/select-search';

// TODO: it's static (options are hardcoded) now but it should be dynamically populated using async feature of react-select-search package
const SortBy = props => (
  <TheSelectSearch
    options={SORT_BY_OPTIONS}
    {...props} />
);

export default SortBy;
