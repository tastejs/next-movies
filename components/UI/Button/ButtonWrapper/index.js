
import withTheme from 'utils/hocs/withTheme';

const ButtonWrapper = ({
  theme,
  className,
  // TODO: update naming
  left,
  contained,
  children,
  ...rest
}) => (
  <>
    <button
      {...rest}
      className={`button-wrapper ${className}`}>
      {children}
    </button>
    <style jsx>{`
      .button-wrapper {
        display: flex;
        flex-direction: ${left ? 'row' : 'row-reverse'};
        align-items: center;
        outline: none;
        padding: 1.2rem 3rem;
        line-height: 1;
        font-weight: 500;
        font-size: 1.3rem;
        color: ${contained ? 'var(--palette-text-primary)' : 'var(--palette-primary-main)'};
        border: 1px solid ${contained ? 'transparent' : 'rgba(var(--palette-primary-main-rgb), 0.5)'};
        border-radius: ${theme.shape.borderRadius}px;
        box-shadow: ${contained ? `${theme.shadows[2]}` : 'none'};
        background-color: ${contained ? 'var(--palette-primary-main)' : 'transparent'};
        transition-property: background-color, box-shadow, border, transform;
        transition-duration: ${theme.transitions.duration.short}ms, ${theme.transitions.duration.short}ms, ${theme.transitions.duration.short}ms, ${theme.transitions.duration.short}ms;
        transition-timing-function: ${theme.transitions.easing.easeInOut}, ${theme.transitions.easing.easeInOut}, ${theme.transitions.easing.easeInOut}, ${theme.transitions.easing.easeInOut};
      }
    
      .button-wrapper:hover {
        transform: translateY(-3px);
        border: 1px solid ${contained ? 'transparent' : 'var(--palette-primary-main)'};
        box-shadow: ${contained ? `${theme.shadows[4]}` : 'none'};
        background-color: ${contained ? 'var(--palette-primary-dark)' : 'rgba(var(--palette-primary-main-rgb), 0.08)'};
      }

      .button-wrapper:active {
        transform: translateY(2px);
      }
    
      @media ${theme.mediaQueries.large} {
        .button-wrapper {
          padding: 1.2rem 2rem;
        }
      }
    
      @media ${theme.mediaQueries.small} {
        .button-wrapper {
          padding: 1.3rem 1.6rem;
        }
      }
    
      @media ${theme.mediaQueries.smaller} {
        .button-wrapper {
          padding: 1rem 1.3rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(ButtonWrapper);
