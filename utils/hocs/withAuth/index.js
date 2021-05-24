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

import NotFound from 'parts/NotFound';
import { useAuth } from 'utils/hocs/AuthProvider';

// TODO: <
/**
 * TODO:
 * Should handle error state and show proper error message based on error state. RE: https://github.com/addyosmani/launch/issues/14#issuecomment-723718803
 */
// TODO: >

const withAuth = WrappedComponent => {
  return React.forwardRef(function AuthComponent(props, ref) {
    const {
      isAuthenticated,
      // TODO: could handle errors
      error,
      ...rest
    } = useAuth();

    if (!isAuthenticated) {
      return (
        <NotFound
          title="You don't have permission to access this page!"
          subtitle="You've tried to request a page that requires you to be logged in. Log in to your account." />
      );
    }

    return (
      <WrappedComponent
        ref={ref}
        {...props}
        isAuthenticated={isAuthenticated}
        error={error}
        {...rest} />
    );
  });
};

export default withAuth;
