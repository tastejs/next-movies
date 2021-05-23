
import AnchorButton from 'components/AnchorButton';
import { IMDB_TITLE_URL } from 'config/imdb';
import ImdbIcon from 'public/assets/svgs/icons/imdb.svg';

const Imdb = ({ id }) => (
  <>
    {id && (
      <AnchorButton
        anchorProps={{
          href: `${IMDB_TITLE_URL}/${id}`,
          target: '_blank',
          rel: 'noopener noreferrer'
        }}
        buttonProps={{
          title: 'IMDB',
          icon: (
            <ImdbIcon
              fill='currentColor'
              width='0.875em' />
          )
        }} />
    )}
  </>
);

export default Imdb;
