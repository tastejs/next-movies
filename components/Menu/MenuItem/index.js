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

import HeartIcon from 'public/assets/svgs/icons/heart.svg';
import PollIcon from 'public/assets/svgs/icons/poll.svg';
import CalendarIcon from 'public/assets/svgs/icons/calendar.svg';
import DotCircleIcon from 'public/assets/svgs/icons/dot-circle.svg';

import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';

const renderIcon = title => {
  switch (title) {
    case STATIC_MOVIE_CATEGORIES[0].name:
      return (
        <HeartIcon
          style={{marginRight: '10px'}}
          fill='currentColor'
          width='1em' />
      );
    case STATIC_MOVIE_CATEGORIES[1].name:
      return (
        <PollIcon
          style={{marginRight: '10px'}}
          fill='currentColor'
          width='0.875em' />
      );
    case STATIC_MOVIE_CATEGORIES[2].name:
      return (
        <CalendarIcon
          style={{marginRight: '10px'}}
          fill='currentColor'
          width='0.875em' />
      );
    default:
      return (
        <DotCircleIcon
          style={{marginRight: '10px'}}
          fill='currentColor'
          width='1em' />
      );
  }
};

const MenuItem = ({ title }) => (
  <>
    <div className='menu-item'>
      {renderIcon(title)}
      {title}
    </div>
    <style jsx>{`
      .menu-item {
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
      }
    `}</style>
  </>
);

export default MenuItem;
