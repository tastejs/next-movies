

import { useState, useRef, useEffect } from 'react';
import Glider from 'react-glider';

import PersonLink from './PersonLink';

const GLIDER_ITEM_WIDTH = 70;

const Cast = ({
  cast,
  baseUrl
}) => {
  const [slidesToShow, setSlidesToShow] = useState(null);
  const ref = useRef(null);
  
  const changeSlidesToShow = () => {
    let numberOfPersonSpaces = Math.round(ref.current.offsetWidth / GLIDER_ITEM_WIDTH);
    if (numberOfPersonSpaces > cast.length) {
      numberOfPersonSpaces = cast.length;
    }
    setSlidesToShow(numberOfPersonSpaces);
  };

  useEffect(() => {
    changeSlidesToShow();
    window.addEventListener('resize', changeSlidesToShow);
    return () => window.removeEventListener('resize', changeSlidesToShow);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        ref={ref}
        className='cast'>
        <Glider
          hasArrows
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          itemWidth={GLIDER_ITEM_WIDTH}>
          {cast.map(person => (
            <PersonLink
              key={person.credit_id}
              person={person}
              baseUrl={baseUrl} />
          ))}
        </Glider>
      </div>
      <style jsx>{`
        :global(.glider,.glider-contain) {
          margin: 0 auto;
          position: relative;
        }
        
        :global(.glider,.glider-track) {
          transform: translateZ(0);
        }
        
        :global(.glider-dot,.glider-next,.glider-prev) {
          border: 0;
          padding: 0;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          outline: 0;
        }
        
        :global(.glider-contain) {
          width: 100%;
        }
        
        :global(.glider) {
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: none;
        }
        
        :global(.glider-track) {
          width: 100%;
          margin: 0;
          padding: 0;
          display: flex;
          z-index: 1;
        }
        
        :global(.glider.draggable) {
          cursor: -webkit-grab;
          cursor: grab;
        }
        
        :global(.glider.draggable,.glider.draggable .glider-slide img) {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none
        }
        
        :global(.glider.draggable .glider-slide img) {
          pointer-events: none;
        }
        
        :global(.glider.drag) {
          cursor: -webkit-grabbing;
          cursor: grabbing;
        }
        
        :global(.glider-slide) {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          justify-content: center;
          align-content: center;
          width: 100%;
          min-width: 150px;
        }
        
        :global(.glider-slide img) {
          max-width: 100%;
        }
        
        :global(.glider::-webkit-scrollbar) {
          opacity: 0;
          height: 0;
        }
        
        :global(.glider-next,.glider-prev) {
          position: absolute;
          background: 0 0;
          z-index: 2;
          font-size: 40px;
          text-decoration: none;
          left: -23px;
          top: 30%;
          cursor: pointer;
          color: #666;
          opacity: 1;
          line-height: 1;
          transition: opacity .5s cubic-bezier(.17,.67,.83,.67),color .5s cubic-bezier(.17,.67,.83,.67);
        }
        
        :global(.glider-next:focus,.glider-next:hover,.glider-prev:focus,.glider-prev:hover) {
          color: #ccc;
        }
        
        :global(.glider-next) {
          right: -23px;
          left: auto;
        }
        
        :global(.glider-next.disabled,.glider-prev.disabled) {
          opacity: .25;
          color: #666;
          cursor: default;
        }
        
        :global(.glider-hide) {
          opacity: 0;
        }
        
        :global(.glider-dots) {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 auto;
          padding: 0;
        }
        
        :global(.glider-dot) {
          display: block;
          cursor: pointer;
          color: #ccc;
          border-radius: 999px;
          background: #ccc;
          width: 12px;
          height: 12px;
          margin: 7px;
        }
        
        :global(.glider-dot:focus,.glider-dot:hover) {
          background: #ddd;
        }
        
        :global(.glider-dot.active) {
          background: #a89cc8;
        }
        
        @media(max-width: 36em) {
          :global(.glider::-webkit-scrollbar) {
            opacity:1;
            -webkit-appearance: none;
            width: 7px;
            height: 3px;
          }
      
          :global(.glider::-webkit-scrollbar-thumb) {
            opacity: 1;
            border-radius: 99px;
            background-color: hsla(0,0%,61.2%,.25);
            box-shadow: 0 0 1px hsla(0,0%,100%,.25);
          }
        }

        .cast {
          margin: 0 20px;
        }
        :global(.glider-prev, .glider-next) {
          // TODO: hardcoded
          top: -1px;
        }
        :global(.glider-prev) {
          left: -20px;
        }
        :global(.glider-next) {
          right: -20px;
        }
      `}</style>
      <style jsx>{`
        :global(.glider-slide) {
          background-color: transparent;
          min-width: ${GLIDER_ITEM_WIDTH}px;
        }
      `}</style>
    </>
  );
};

export default Cast;
