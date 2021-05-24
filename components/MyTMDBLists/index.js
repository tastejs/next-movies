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

import BackdropsGridContainer from 'components/BackdropsGridContainer';
import MyTMDBList from './MyTMDBList';
import Pagination from 'components/Pagination';
import withTheme from 'utils/hocs/withTheme';

const MyTMDBLists = ({
  theme,
  myLists,
  baseUrl
}) => (
  <>
    <BackdropsGridContainer theme={theme}>
      {myLists.results.map(myList => (
        <MyTMDBList
          theme={theme}
          key={myList.id}
          myList={myList}
          baseUrl={baseUrl} />
      ))}
    </BackdropsGridContainer>
    <Pagination
      page={myLists.page}
      totalPages={myLists.total_pages} />
  </>
);

export default withTheme(MyTMDBLists);
