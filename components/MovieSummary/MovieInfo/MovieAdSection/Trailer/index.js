
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

  const { key: videoId } = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube') || {};

  return (
    <>
      <Button
        endIcon={
          <PlayIcon
            fill='currentColor'
            width='0.875em' />
        }
        title='Trailer'
        onClick={openModalVideoHandler} />
      <ModalVideo
        isOpen={modalVideoOpened}
        channel='youtube'
        videoId={videoId}
        onClose={closeModalVideoHandler} />
      <style jsx>{`
        @-webkit-keyframes :global(modal-video) {
          0% {
            opacity: 0;
          }
      
          to {
            opacity: 1;
          }
        }
        
        @keyframes :global(modal-video) {
          0% {
            opacity: 0;
          }
      
          to {
            opacity: 1;
          }
        }
        
        @-webkit-keyframes :global(modal-video-inner) {
          0% {
            transform: translateY(100px);
          }
      
          to {
            transform: translate(0);
          }
        }
        
        @keyframes :global(modal-video-inner) {
          0% {
            transform: translateY(100px);
          }
      
          to {
            transform: translate(0);
          }
        }
        
        :global(.modal-video) {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.5);
          z-index: 1000000;
          cursor: pointer;
          opacity: 1;
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: .3s;
          animation-duration: .3s;
          -webkit-animation-name: modal-video;
          animation-name: modal-video;
          transition: opacity .3s ease-out;
        }
        
        :global(.modal-video-effect-exit) {
          opacity: 0;
        }
        
        :global(.modal-video-effect-exit .modal-video-movie-wrap) {
          transform: translateY(100px);
        }
        
        :global(.modal-video-body) {
          max-width: 940px;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          display: table;
        }
        
        :global(.modal-video-inner) {
          display: table-cell;
          vertical-align: middle;
          width: 100%;
          height: 100%;
        }
        
        :global(.modal-video-movie-wrap) {
          width: 100%;
          height: 0;
          position: relative;
          padding-bottom: 56.25%;
          background-color: #333;
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: .3s;
          animation-duration: .3s;
          -webkit-animation-name: modal-video-inner;
          animation-name: modal-video-inner;
          transform: translate(0);
          transition: transform .3s ease-out;
        }
        
        :global(.modal-video-movie-wrap iframe) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        :global(.modal-video-close-btn) {
          position: absolute;
          z-index: 2;
          top: -35px;
          right: -35px;
          display: inline-block;
          width: 35px;
          height: 35px;
          overflow: hidden;
          border: none;
          background: transparent;
        }
        
        :global(.modal-video-close-btn:before) {
          transform: rotate(45deg);
        }
        
        :global(.modal-video-close-btn:after) {
          transform: rotate(-45deg);
        }
        
        :global(.modal-video-close-btn:after,.modal-video-close-btn:before) {
          content: "";
          position: absolute;
          height: 2px;
          width: 100%;
          top: 50%;
          left: 0;
          background: #fff;
          border-radius: 5px;
          margin-top: -6px;
        }
      `}</style>
    </>
  );
};

export default Trailer;
