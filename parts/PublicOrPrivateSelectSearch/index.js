

import TheSelectSearch from 'components/UI/TheSelectSearch';
import classes from './style.module.css';

const PublicOrPrivateSelectSearch = props => (
  <TheSelectSearch
    classes={classes}
    {...props} />
);

export default PublicOrPrivateSelectSearch;
