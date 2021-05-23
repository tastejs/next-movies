
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import PageWrapper from 'parts/PageWrapper';
import PersonSummary from 'components/PersonSummary';
import PersonMovieList from 'components/PersonMovieList';
import Loader from 'components/UI/Loader';
import getPerson from 'actions/getPerson';
import clearPerson from 'actions/clearPerson';
import getPersonMovies from 'actions/getPersonMovies';
import clearPersonMovies from 'actions/clearPersonMovies';
import SORT_BY_OPTIONS from 'utils/constants/sort-by-options';
import QUERY_PARAMS from 'utils/constants/query-params';

const Person = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const person = useSelector(state => state.person);
  const personMovies = useSelector(state => state.personMovies);
  const { query } = useRouter();
  const [sortByOptionValue, setSortByOptionValue] = useState(SORT_BY_OPTIONS[0].value);

  const personId = query[QUERY_PARAMS.ID];
  const page = query[QUERY_PARAMS.PAGE] || 1;

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 500
    });
    dispatch(getPerson(personId));
    return () => dispatch(clearPerson());
  }, [personId, dispatch]);

  useEffect(() => {
    dispatch(getPersonMovies(personId, page, sortByOptionValue));
    return () => dispatch(clearPersonMovies());
  }, [personId, page, sortByOptionValue, dispatch]);

  if (person.loading) {
    return <Loader />;
  }

  const { secure_base_url: baseUrl } = general.base.images;

  const sortByOptionValueOnChangeHandler = newSortByOptionValue => {
    setSortByOptionValue(newSortByOptionValue);
  };

  return (
    <PageWrapper>
      <Head>
        <title>{`${person.name} - Person Library`}</title>
      </Head>
      <PersonSummary
        baseUrl={baseUrl}
        person={person} />
      <PersonMovieList
        baseUrl={baseUrl}
        personMovies={personMovies}
        sortByOptionValue={sortByOptionValue}
        sortByOptionValueOnChange={sortByOptionValueOnChangeHandler} />
    </PageWrapper>
  );
};

export default Person;
