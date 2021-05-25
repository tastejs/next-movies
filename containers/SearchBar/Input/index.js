
const Input = React.forwardRef(({
  opened,
  theme,
  ...rest
}, ref) => (
  <>
    <input
      className='input'
      ref={ref}
      {...rest} />
    <style jsx>{`
      .input {
        font-size: 1.5rem;
        line-height: 1;
        font-weight: ${theme.typography.fontWeightLight};
        background-color: transparent;
        width: 100%;
        margin-left: ${opened ? '1rem' : '0rem'};
        color: var(--palette-secondary-contrast-text);
        border: none;
        transition: margin-left ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
      }
    
      @media ${theme.mediaQueries.large} {
        .input {
          font-size: 1.25rem;
        }
      }

      @media ${theme.mediaQueries.medium} {
        .input {
          font-size: 1rem;
        }
      }
      @media ${theme.mediaQueries.small} {
        .input {
          font-size: 0.875rem;
        }
      }
    
      input:focus,
      input:active {
        outline: none;
      }

      input::placeholder {
        color: var(--palette-secondary-contrast-text);
      }
    `}</style>
  </>
));

export default Input;
