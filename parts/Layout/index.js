
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from 'containers/Sidebar';
import AppBar from 'containers/AppBar';
import SearchBar from 'components/SearchBar';
import Loader from 'components/UI/Loader';
import Head from 'components/Head';
import DarkModeToggle from 'components/DarkModeToggle';
import MainWrapper from './MainWrapper';
import ContentWrapper from './ContentWrapper';
import init from 'actions/init';
import useMedia from 'utils/hooks/useMedia';
import withTheme from 'utils/hocs/withTheme';

const Layout = ({
  theme,
  children
}) => {
  // TODO: Client-side Rendering for now
  // RE: https://nextjs.org/learn/basics/data-fetching/two-forms
  // RE: https://nextjs.org/learn/basics/data-fetching/request-time
  // RE: https://nextjs.org/docs/basic-features/data-fetching
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  }, [dispatch]);
  const loading = useSelector(state => state.general.loading);
  const isMobile = useMedia(`(max-width: ${theme.size.large})`);

  return (
    <>
      <Head />
      {loading ? (
        <ContentWrapper theme={theme}>
          <Loader />
        </ContentWrapper>
      ) : (
        <MainWrapper theme={theme}>
          {isMobile ? (
            <AppBar />
          ) : (
            <>
              <Sidebar />
              <div className='widgets-container'>
                <SearchBar />
                <DarkModeToggle />
              </div>
            </>
          )}
          <ContentWrapper theme={theme}>
            {children}
          </ContentWrapper>
        </MainWrapper>
      )}
      <style jsx>{`
        .widgets-container {
          position: absolute;
          top: 0;
          right: 0;
          padding: 2rem;
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default withTheme(Layout);
