
import clsx from 'clsx';

const Loading = () => (
  <>
    <div className='loading' />
    <style jsx>{`
      .loading {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: var(--palette-primary-dark);
        box-shadow: -5rem 0rem 0rem var(--palette-primary-main);
        animation: circle-classic 1s ease-in-out infinite alternate;
  
        @keyframes circle-classic {
          0% {
            opacity: 0.1;
            transform: rotate(0deg) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: rotate(360deg) scale(1.2);
          }
        }
      }
    `}</style>
  </>
);

const Loader = ({
  className = '',
  centerViewport,
  centerRow
}) => (
  <>
    <div
      className={
        clsx(
          'loader',
          {'center-viewport': centerViewport},
          {'center-row': centerRow},
          className
        )
      }>
      <Loading />
    </div>
    <style jsx>{`
      .loader {
        display: grid;
        place-items: center;
        min-width: 150px;
        min-height: 150px;
      }
      .center-viewport {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .center-row {
        width: 100%;
      }
    `}</style>
  </>
);

export default Loader;
