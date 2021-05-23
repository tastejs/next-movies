
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

import Button from 'components/UI/Button';
import PlayIcon from 'public/assets/svgs/icons/play.svg';

const Trailer = ({ videos }) => {
  const [modalVideoOpened, setModalVideoOpened] = useState(false);

  const openModalVideoHandler = () => {
    setModalVideoOpened(true);
  };

  const closeModalVideoHandler = () => {
    setModalVideoOpened(false);
  };

  if (videos.length === 0) {
    return null;
  }

  // TODO: double check the strategy with Addy
  const { key: videoId } = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube') || {};

  return (
    <>
      <Button
        icon={(
          <PlayIcon
            fill='currentColor'
            width='0.875em' />
        )}
        title='Trailer'
        onClick={openModalVideoHandler} />
      <ModalVideo
        isOpen={modalVideoOpened}
        channel='youtube'
        videoId={videoId}
        onClose={closeModalVideoHandler} />
    </>
  );
};

export default Trailer;
