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

const MoviesGridContainer = ({
  theme,
  children
}) => (
  <>
    <div className='grid-container'>{children}</div>
    <style jsx>{`
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
        grid-gap: 4rem 2rem;
        justify-content: space-evenly;
        align-content: space-between;
        align-items: start;
        margin: 4rem 0;
      }
    
      @media ${theme.mediaQueries.small} {
        .grid-container {
          grid-template-columns: repeat(auto-fit, minmax(10rem, 23rem));
          justify-content: space-around;
          grid-gap: 4rem 1.5rem;
        }
      }
    
      @media ${theme.mediaQueries.smaller} {
        .grid-container {
          grid-template-columns: repeat(auto-fit, minmax(10rem, 18rem));
          grid-gap: 4rem 1rem;
        }
      }
    `}</style>
  </>
);

export default MoviesGridContainer;
