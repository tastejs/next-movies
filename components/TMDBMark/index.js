
const TMDBMark = ({ isMobile }) => (
  <>
    {/* MEMO: inspired by https://web.dev/prefers-color-scheme/#art-direction-with-dark-mode */}
    <picture>
      <source srcSet='/assets/svgs/tmdbgreen.svg' media='(prefers-color-scheme: dark)' />
      <source srcSet='/assets/svgs/tmdb.svg' media='(prefers-color-scheme: light)' />
      <img
        className='tmdb-mark'
        alt='The Movie Database'
        style={isMobile ? {marginBottom: '2rem'} : {margin: '2rem 0'}}
        src='eastern.webp' />
    </picture>
    <style jsx>{`
      .tmdb-mark {
        max-width: 100%;
        height: 3rem;
      }
    `}</style>
  </>
);

export default TMDBMark;
