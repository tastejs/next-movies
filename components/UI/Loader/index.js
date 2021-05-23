
const LoadingWrapper = ({ children }) => (
  <>
    <div className='loading-wrapper'>
      {children}  
    </div>
    <style jsx>{`
      .loading-wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: 150px;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </>
);

const Loading = () => (
  <>
    <div className='loading' />
    <style jsx>{`
      .loading {
        width: 3rem;
        height: 3rem;
        background-color: var(--palette-primary-dark);
        // TODO: different behavior
        box-shadow: -5rem 0rem 0rem var(--palette-primary-main);
        border-radius: 50%;
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

const Loader = () => (
  <LoadingWrapper>
    <Loading />
  </LoadingWrapper>
);

export default Loader;
