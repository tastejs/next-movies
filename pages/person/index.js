

import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
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
import { SORT_BY_OPTIONS } from 'utils/constants/select-search';
import QUERY_PARAMS from 'utils/constants/query-params';
import LINKS from 'utils/constants/links';
import checkEmptyObject from 'utils/helpers/checkEmptyObject';

const Person = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const person = useSelector(state => state.person);
  const personMovies = useSelector(state => state.personMovies);
  const { query } = useRouter();
  const [sortByOptionValue, setSortByOptionValue] = useState(SORT_BY_OPTIONS[0].value);

  const personId = query[QUERY_PARAMS.ID];
  const page = Number(query[QUERY_PARAMS.PAGE]);

  useEffect(() => {
    return () => {
      dispatch(clearPerson());
      dispatch(clearPersonMovies());
    };
  }, [dispatch]);

  useEffect(() => {
    if (checkEmptyObject(query)) return;

    const initialPersonId = Router.query[QUERY_PARAMS.ID];
    const initialPage = Router.query[QUERY_PARAMS.PAGE];

    if (!initialPage) {
      const newPersonId = initialPersonId;
      const newPage = 1;
      console.log('[Movie useEffect] query parameter update: newPersonId, newPage => ', newPersonId, newPage);
      Router.push({
        pathname: LINKS.PERSON.HREF,
        query: {
          [QUERY_PARAMS.ID]: newPersonId,
          [QUERY_PARAMS.PAGE]: newPage
        }
      });
    }
  }, [dispatch, query]);

  useEffect(() => {
    if (!personId) return;

    scroll.scrollToTop({
      smooth: true,
      delay: 500
    });

    dispatch(getPerson(personId));
  }, [personId, dispatch]);

  useEffect(() => {
    if (!personId || !page || !sortByOptionValue) return;
    dispatch(getPersonMovies(personId, page, sortByOptionValue));
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
