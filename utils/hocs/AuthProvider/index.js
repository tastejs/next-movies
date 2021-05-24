/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  useState,
  useEffect,
  useContext
} from 'react';

import AuthContext from 'contexts/auth-context';
import { TMDB_API_NEW_VERSION, TMDB_BASE_URL } from 'config/tmdb';
import { loadState, saveState } from 'utils/helpers/localStorage';
import STATUSES from 'utils/constants/statuses';
import tmdbAPI from 'services/tmdbAPI';

// TODO: <
/**
 * TODO:
 * Should handle https://trello.com/c/Q1ceDQ8e/18-deleting-a-v4-access-token-does-not-work.
 * Should alter the default headers of our fetch library (in our case, axios) to include the auth token in all requests.
 */
// TODO: >

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    status: STATUSES.IDLE,
    error: null,
    accessToken: '',
    accountId: ''
  });

  useEffect(() => {
    (async () => {
      try {
        const {
          request_token: requestToken = '',
          access_token: initialAccessToken = '',
          account_id: initialAccountId = ''
        } = loadState() || {};

        if (!requestToken && initialAccessToken && initialAccountId) {
          setState({
            status: STATUSES.RESOLVED,
            error: null,
            accessToken: initialAccessToken,
            accountId: initialAccountId
          });
          return;
        };

        if (!requestToken) {
          return;
        }

        const response = await tmdbAPI.post(`/${TMDB_API_NEW_VERSION}/auth/access_token`, {
          request_token: requestToken
        });
        const accessTokenResults = response.data;

        const accessToken = accessTokenResults.access_token;
        const accountId = accessTokenResults.account_id;
        saveState({
          request_token: '',
          access_token: accessToken,
          account_id: accountId
        });

        setState({
          status: STATUSES.RESOLVED,
          error: null,
          accessToken,
          accountId
        });
      } catch (error) {
        console.log('[AuthProvider useEffect] error => ', error);
        setState({
          status: STATUSES.REJECTED,
          error,
          accessToken: '',
          accountId: ''
        });
      }
    })();
  }, []);

  const login = async () => {
    try {
      const currentURL = window.location.href;

      setState({
        status: STATUSES.PENDING,
        error: null,
        accessToken: '',
        accountId: ''
      });
      const response = await tmdbAPI.post(`/${TMDB_API_NEW_VERSION}/auth/request_token`, {
        redirect_to: currentURL
      });
      const requestTokenResults = response.data;
    
      const requestToken = requestTokenResults.request_token;
      saveState({
        request_token: requestToken,
        access_token: '',
        account_id: ''
      });
      window.location.replace(`${TMDB_BASE_URL}/auth/access?request_token=${requestToken}`);
    } catch (error) {
      console.log('[TheUser login] error => ', error);
      setState({
        status: STATUSES.REJECTED,
        error
      });
    }
  };

  const logout = async () => {
    try {
      setState({
        status: STATUSES.PENDING,
        error: null
      });

      await tmdbAPI.delete(`/${TMDB_API_NEW_VERSION}/auth/access_token`, {
        data: {
          access_token: state.accessToken
        }
      });

      saveState({
        request_token: '',
        access_token: '',
        account_id: ''
      });

      setState({
        status: STATUSES.RESOLVED,
        error: null,
        accessToken: '',
        accountId: ''
      });
    } catch (error) {
      console.log('[TheUser logout] error => ', error);

      // TODO: workaround until https://trello.com/c/Q1ceDQ8e/18-deleting-a-v4-access-token-does-not-work is fixed
      if (error.status === 404) {
        saveState({
          request_token: '',
          access_token: '',
          account_id: ''
        });

        setState({
          status: STATUSES.IDLE,
          error: null,
          accessToken: '',
          accountId: ''
        });
        return;
      }

      setState({
        status: STATUSES.REJECTED,
        error
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const {
    state = {},
    login,
    logout
  } = useContext(AuthContext) || {};
  const isPending = state.status === STATUSES.PENDING;
  const isError = state.status === STATUSES.REJECTED;
  const isSuccess = state.status === STATUSES.RESOLVED;
  const isAuthenticated = state.accessToken && isSuccess;

  return {
    ...state,
    login,
    logout,
    isPending,
    isError,
    isSuccess,
    isAuthenticated
  };
};

export {
  AuthProvider,
  useAuth
};
