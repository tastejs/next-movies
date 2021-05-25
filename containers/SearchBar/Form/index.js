

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
