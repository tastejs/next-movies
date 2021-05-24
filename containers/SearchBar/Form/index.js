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

const Form = React.forwardRef(({
  opened,
  theme,
  children,
  ...rest
}, ref) => (
  <>
    <form
      ref={ref}
      className='form'
      {...rest}>
      {children}
    </form>
    <style jsx>{`
      .form {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: ${theme.shadows[1]};
        background-color: var(--palette-secondary-dark);
        border: 1px solid var(--palette-secondary-main);
        width: ${opened ? '30rem' : '2rem'};
        cursor: ${opened ? 'auto' : 'pointer'};
        padding: 2rem;
        height: 2rem;
        outline: none;
        border-radius: 100px;
        transition: width ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
      }
    
      @media ${theme.mediaQueries.large} {
        .form {
          padding: 1.5rem;
          border: 1px solid transparent;
          background-color: var(--palette-secondary-main);
        }
      }
    
      @media ${theme.mediaQueries.smaller} {
        .form {
          max-width: 16rem;
        }
      }
    `}</style>
  </>
));

export default Form;
