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

const SidebarInnerWrapper = ({ children }) => (
  <>
    <div className='sidebar-inner-wrapper'>{children}</div>
    <style jsx>{`
      .sidebar-inner-wrapper {
        display: flex;
        flex-direction: column;
        width: 25rem;
        padding: 2rem;
        margin-top: 4rem;
        border-right: 1px solid var(--palette-divider);
      }
    `}</style>
  </>
);

export default SidebarInnerWrapper;
