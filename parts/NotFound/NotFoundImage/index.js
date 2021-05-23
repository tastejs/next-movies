
// TODO: create a very generic image component as we did in the web-vitals demo project
const NotFoundImage = props => (
  <>
    <img
      {...props}
      className='not-found-image' />
    <style jsx>{`
      .not-found-image {
        max-width: 100%;
        height: 40vh;
        margin-bottom: 6rem;
      }
    `}</style>
  </>
);

export default NotFoundImage;
