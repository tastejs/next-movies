
import SelectSearch from 'react-select-search/dist/cjs';

import withTheme from 'utils/hocs/withTheme';
import SORT_BY_OPTIONS from 'utils/constants/sort-by-options';

const SortBy = ({
  theme,
  value,
  onChange
}) => (
  <>
    <SelectSearch
      value={value}
      onChange={onChange}
      options={SORT_BY_OPTIONS} />
    <style>{`
      /**
       * Main wrapper
       */
      .select-search {
        width: 300px;
        position: relative;
        font-family: 'Nunito Sans', sans-serif;
        box-sizing: border-box;
      }
      
      .select-search *,
      .select-search *::after,
      .select-search *::before {
        box-sizing: inherit;
      }
      
      /**
       * Value wrapper
       */
      .select-search__value {
        position: relative;
        z-index: 1;
      }
      
      .select-search__value::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: calc(50% - 9px);
        right: 19px;
        width: 11px;
        height: 11px;
      }
      
      /**
       * Input
       */
      .select-search__input {
        display: block;
        height: 36px;
        width: 100%;
        padding: 0 16px;
        color: var(--palette-text-primary);
        background-color: var(--palette-background-paper);
        border: 1px solid var(--palette-divider);
        box-shadow: ${theme.shadows[1]};
        border-radius: ${theme.shape.borderRadius}px;
        outline: none;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.4rem;
        text-align: left;
        text-overflow: ellipsis;
        line-height: 36px;
        -webkit-appearance: none;
      }
      
      .select-search__input::-webkit-search-decoration,
      .select-search__input::-webkit-search-cancel-button,
      .select-search__input::-webkit-search-results-button,
      .select-search__input::-webkit-search-results-decoration {
        -webkit-appearance:none;
      }
      
      .select-search__input:not([readonly]):focus {
        cursor: initial;
      }
      
      /**
       * Options wrapper
       */
      .select-search__select {
        box-shadow: ${theme.shadows[2]};
        border: 1px solid var(--palette-divider);
        background-color: var(--palette-background-paper);
      }
      
      /**
       * Options
       */
      .select-search__options {
        list-style: none;
      }
      
      /**
       * Option row
       */
      .select-search__row:not(:first-child) {
        border-top: 1px solid var(--palette-divider);
      }
      
      /**
       * Option
       */
      .select-search__option {
        display: block;
        height: 36px;
        width: 100%;
        padding: 0 16px;
        color: var(--palette-text-secondary);
        background-color: var(--palette-background-paper);
        border: none;
        outline: none;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.4rem;
        text-align: left;
        cursor: pointer;
      }
      
      .select-search--multiple .select-search__option {
        height: 48px;
      }
      
      .select-search__option.is-selected {
        color: var(--palette-text-primary);
        background-color: var(--palette-primary-lighter);
      }
      
      .select-search__option.is-highlighted,
      .select-search__option:not(.is-selected):hover {
        background-color: rgba(${theme.palette.primary.lighter.rgb}, 0.5);
      }
      
      .select-search__option.is-highlighted.is-selected,
      .select-search__option.is-selected:hover {
        /* background-color: var(--palette-primary-light);
        color: var(--palette-text-primary); */
      }
      
      /**
       * Group
       */
      /* TODO: not used */
      .select-search__group-header {
        font-size: 1rem;
        text-transform: uppercase;
        background: #eee;
        padding: 8px 16px;
      }
      
      /**
       * States
       */
      .select-search.is-disabled {
        opacity: 0.5;
      }
      
      .select-search.is-loading .select-search__value::after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cpath fill='%232F2D37' d='M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E");
        background-size: 11px;
      }
      
      .select-search:not(.is-disabled) .select-search__input {
        cursor: pointer;
      }
      
      /**
       * Modifiers
       */
      .select-search--multiple {
        border-radius: ${theme.shape.borderRadius}px;
        overflow: hidden;
      }
      
      /* TODO: not used */
      .select-search:not(.is-loading):not(.select-search--multiple) .select-search__value::after {
        transform: rotate(45deg);
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
        pointer-events: none;
      }
      
      .select-search--multiple .select-search__input {
        cursor: initial;
      }
      
      .select-search--multiple .select-search__input {
        border-radius: ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0;
      }
      
      .select-search--multiple:not(.select-search--search) .select-search__input {
        cursor: default;
      }
      
      .select-search:not(.select-search--multiple) .select-search__input:hover {
        /* border-color: var(--palette-primary-main); */
      }
      
      .select-search:not(.select-search--multiple) .select-search__select {
        position: absolute;
        z-index: 2;
        top: 44px;
        right: 0;
        left: 0;
        border-radius: ${theme.shape.borderRadius}px;
        overflow: auto;
        max-height: 360px;
      }
      
      /* TODO: not used */
      .select-search--multiple .select-search__select {
        position: relative;
        overflow: auto;
        max-height: 260px;
        border-top: 1px solid #eee;
        border-radius: 0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px;
      }
    `}</style>
  </>
);

export default withTheme(SortBy);
