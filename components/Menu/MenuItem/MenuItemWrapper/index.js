
import withTheme from 'utils/hocs/withTheme';

const MenuItemWrapper = ({
  theme,
  selected,
  children
}) => (
  <>
    <div className='menu-item-wrapper'>
      {children}
    </div>
    <style jsx>{`
      .menu-item-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1;
        opacity: ${selected ? '1' : '.6'};
        color: ${selected ? 'var(--palette-text-primary)' : 'var(--palette-text-secondary)'};
        border-color: ${selected ? 'var(--palette-primary-dark)' : 'var(--palette-primary-light)'};
        border: ${selected ? '1px solid' : '1px solid transparent'};
        border-radius: ${theme.shape.borderRadius}px;
        text-decoration: none;
        cursor: pointer;
        transition: border ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut};
      }
      
      div.menu-item-wrapper:not(:last-child) {
        margin-bottom: 3rem;
      }
    
      div.menu-item-wrapper:hover {
        border: 1px solid;
      }
    `}</style>
  </>
);

export default withTheme(MenuItemWrapper);
