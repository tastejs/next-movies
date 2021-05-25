

import AnchorButton from 'components/AnchorButton';
import LinkIcon from 'public/assets/svgs/icons/link.svg';

const Website = ({ href }) => (
  <>
    {href && (
      <AnchorButton
        anchorProps={{
          href,
          target: '_blank',
          rel: 'noopener noreferrer'
        }}
        buttonProps={{
          title: 'Website',
          endIcon: (
            <LinkIcon
              fill='currentColor'
              width='1em' />
          )
        }} />
    )}
  </>
);

export default Website;
