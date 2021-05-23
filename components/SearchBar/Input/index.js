
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
        font-size: 1.4rem;
        line-height: 1;
        font-weight: 300;
        background-color: transparent;
        width: 100%;
        margin-left: ${opened ? '1rem' : '0rem'};
        color: ${theme.palette.primary.contrastText};
        border: none;
        transition: margin-left ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
      }
    
      @media ${theme.mediaQueries.large} {
        .input {
          font-size: 1.3rem;
        }
      }
    
      @media ${theme.mediaQueries.medium} {
        .input {
          font-size: 1.2rem;
        }
      }
    
      @media ${theme.mediaQueries.small} {
        .input {
          font-size: 1.1rem;
        }
      }
    
      input:focus,
      input:active {
        outline: none;
      }
    `}</style>
  </>
));

export default Input;
