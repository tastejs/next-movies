

import withTheme from 'utils/hocs/withTheme';
import ALIGNMENTS from 'utils/constants/alignments';

const DropdownMenuItem = props => (
  <li {...props} />
);

const DropdownMenu = ({
  align = ALIGNMENTS.LEFT,
  theme,
  DropElement,
  children
}) => (
  <>
    <div className='dropdown'>
      <DropElement />
      <ul className='dropdown-content'>
        {children}
      </ul>
    </div>
    {/* MEMO: removed border-radius for better and more consistent look and feel */}
    <style jsx>{`
      ul {
        list-style-type: none;
      }

      .dropdown {
        position: relative;
        display: inline-block;
      }
      
      ul.dropdown-content {
        visibility: hidden;
        position: absolute;
        right: ${align === ALIGNMENTS.RIGHT ? 0 : 'unset'};
        min-width: 160px;
        box-shadow: ${theme.shadows[1]};
        border: 1px solid var(--palette-divider);
        background-color: var(--palette-background-paper);
        /* border-radius: ${theme.shape.borderRadius}px; */
        z-index: ${theme.zIndex.modal};
      }
      
      ul.dropdown-content :global(li) {
        display: flex;
        align-items: center;
        padding: 0 16px;
        color: var(--palette-text-primary);
        font-size: 1.5rem;
        height: 36px;
        background-color: var(--palette-background-paper);
        transition: background-color ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut};
      }

      ul.dropdown-content :global(li > *) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: inherit;
        width: 100%;
        height: 100%;
      }
      
      ul.dropdown-content :global(li):hover {
        background-color: var(--palette-action-hover);
      }

      ul.dropdown-content :global(li):not(:first-child) {
        border-top: 1px solid var(--palette-divider);
      }

      /* ul.dropdown-content :global(li):first-child {
        border-radius: ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0;
      }
      ul.dropdown-content :global(li):last-child {
        border-radius: 0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px;
      } */
      
      .dropdown:hover ul.dropdown-content {
        visibility: visible;
      }
    `}</style>
  </>
);

export {
  DropdownMenuItem
};

export default withTheme(DropdownMenu);
