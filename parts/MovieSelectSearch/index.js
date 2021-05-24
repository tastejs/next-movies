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

import TheSelectSearch from 'components/UI/TheSelectSearch';
import { TMDB_API_VERSION, TMDB_IMAGE_BASE_URL } from 'config/tmdb';
import { NOTHING_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';
import tmdbAPI from 'services/tmdbAPI';
import { W92H138 } from 'config/image-sizes';
import classes from './style.module.css';

const renderOption = (
  optionsProps,
  optionData,
  _, // optionSnapshot
  className
) => {
  return (
    <button
      {...optionsProps}
      className={className}
      type='button'>
      <picture>
        <source
          type='image/jpeg'
          srcSet={optionData.image} />
        <img
          alt={optionData.name}
          style={{
            verticalAlign: 'middle',
            marginRight: 24,
            objectFit: 'cover'
          }}
          width='92'
          height='84'
          src={NOTHING_PLACEHOLDER_IMAGE_PATH} />
      </picture>
      <span>
        {optionData.name}
      </span>
    </button>
  );
};

const getOptions = async query => {
  try {
    const response = await tmdbAPI.get(`/${TMDB_API_VERSION}/search/movie`, {
      params: {
        query
      }
    });
    const results = response.data.results;
    const options = results.map(result => ({
      value: result.id.toString(),
      name: result.title,
      image: result.poster_path ? `${TMDB_IMAGE_BASE_URL}w${W92H138.WIDTH}${result.poster_path}` : undefined
    }));

    return options;
  } catch (error) {
    console.log('[AddOrEditItems getOptions] error => ', error);
  }
};

const MovieSelectSearch = props => {
  return (
    <TheSelectSearch
      search
      options={[]}
      getOptions={getOptions}
      classes={classes}
      renderOption={renderOption}
      {...props} />
  );
};

export default MovieSelectSearch;
