
// import { wrapper } from 'store';
// import { init } from 'actions';

// TODO: https://nextjs.org/blog/next-9#automatic-partial-static-export
// RE: https://github.com/vercel/next.js/discussions/10874
// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     store.dispatch(init());
//   }
// );

import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import Header from 'parts/Header';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import setSelectedMenuItemName from 'actions/setSelectedMenuItemName';
import getStaticCategoryMovies from 'actions/getStaticCategoryMovies';
import clearMovies from 'actions/clearMovies';
import PageWrapper from 'parts/PageWrapper';
import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';
import QUERY_PARAMS from 'utils/constants/query-params';

const Home = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const movies = useSelector(state => state.movies);
  const router = useRouter();
  const { query } = router;

  // TODO: update the default URL by attaching the category name "Popular" and page 1
  const categoryName = query[QUERY_PARAMS.CATEGORY] || STATIC_MOVIE_CATEGORIES[0].name;
  const page = query[QUERY_PARAMS.PAGE] || 1;
  
  useEffect(() => {
    dispatch(setSelectedMenuItemName(categoryName));
    return () => dispatch(setSelectedMenuItemName());
  }, [categoryName, dispatch]);

  useEffect(() => {
    scroll.scrollToTop({smooth: true});
    dispatch(getStaticCategoryMovies(categoryName, page));
    return () => dispatch(clearMovies());
  }, [categoryName, page, dispatch]);
  
  if (movies.loading) {
    return <Loader />;
  }

  const { secure_base_url: baseUrl } = general.base.images;

  return (
    <PageWrapper>
      <Head>
        <title>{`${general.selectedMenuItemName} Movies`}</title>
      </Head>
      <Header
        title={general.selectedMenuItemName}
        subtitle='movies' />
      <MovieList
        movies={movies}
        baseUrl={baseUrl} />
    </PageWrapper>
  );
};

export default Home;
