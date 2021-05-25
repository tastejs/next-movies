

import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';

const SELECTED_CLASS_NAME = 'selected';
const DISABLED_CLASS_NAME = 'disabled';
const INVISIBLE_CLASS_NAME = 'invisible';

const NavbarItem = withTheme(({
  theme,
  className,
  disabled,
  selected,
  invisible,
  ...rest
}) => (
  <>
    <li
      className={
        clsx(
          {[SELECTED_CLASS_NAME]: selected},
          {[DISABLED_CLASS_NAME]: disabled},
          {[INVISIBLE_CLASS_NAME]: invisible},
          className
        )
      }
      {...rest} />
    <style jsx>{`
      li {
        flex: 1;
        color: var(--palette-text-secondary);
        display: grid;
        place-items: center;
      }
      
      li > :global(a) {
        font-size: 1.5rem;
        color: var(--palette-text-primary);
        padding: 6px 12px;
        text-align: center;
        text-decoration: none;
        transition: color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut} 0ms, padding-top ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut} 0ms;
      }
      
      li.${SELECTED_CLASS_NAME} :global(a) {
        color: var(--palette-primary-main);
      }

      li.${DISABLED_CLASS_NAME} :global(a) {
        color: var(--palette-text-disabled);
        pointer-events: none;
      }

      li.${INVISIBLE_CLASS_NAME} {
        display: none;
      }
    `}</style>
  </>
));

const Navbar = ({
  theme,
  ...rest
}) => (
  <>
    <ul {...rest} />
    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 16px 0;
        padding: 0;
        display: flex;
        min-height: 46px;
        justify-content: center;
        overflow: hidden;
        border: 1px solid var(--palette-divider);
        background-color: var(--palette-background-paper);
        transition: background-color var(--duration) var(--timing);
      }

      @media ${theme.mediaQueries.small} {
        ul {
          flex-direction: column;
        }
      }
    `}</style>
  </>
);

export {
  NavbarItem
};

export default withTheme(Navbar);
