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

import Head from 'next/head';

import { LOGO_IMAGE_PATH, DARK_TMDB_IMAGE_PATH, LIGHT_TMDB_IMAGE_PATH } from 'utils/constants/image-paths';

const MyHead = ({ children }) => (
  <Head>
    <link rel='preconnect' href='https://image.tmdb.org' />
    <link rel='preconnect' href='https://api.themoviedb.org' />
    <link rel='preconnect' href='https://www.google-analytics.com' />
    <link rel='preconnect' href='https://content-autofill.googleapis.com' />
    <link rel='preload' href={LOGO_IMAGE_PATH} as='image' media='(min-width: 80em)' />
    <link rel='preload' href={DARK_TMDB_IMAGE_PATH} as='image' media='(prefers-color-scheme: dark) and (min-width: 80em)' />
    <link rel='preload' href={LIGHT_TMDB_IMAGE_PATH} as='image' media='(prefers-color-scheme: light) and (min-width: 80em)' />
    {/* MEMO: inspired by https://web.dev/optimize-lcp/#establish-third-party-connections-early */}
    {/* <link rel='dns-prefetch' href='https://image.tmdb.org' />
    <link rel='dns-prefetch' href='https://api.themoviedb.org' /> */}
    {children}
  </Head>
);

export default MyHead;
