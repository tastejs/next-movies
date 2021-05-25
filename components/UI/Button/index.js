
import ButtonBase from './ButtonBase';

import LoadingSpinner from 'components/UI/LoadingSpinner';

const Button = ({
  title,
  startIcon,
  endIcon,
  disabled,
  loading,
  ...rest
}) => (
  <>
    <ButtonBase
      className='button'
      disabled={disabled || loading}
      {...rest}>
      <span className='button-label'>
        {startIcon && (
          <span
            style={{
              display: 'inherit',
              marginRight: '8px'
            }}>
            {startIcon}
          </span>
        )}
        {title}
        {endIcon && (
          <span
            style={{
              display: 'inherit',
              marginLeft: '8px'
            }}>
            {endIcon}
          </span>
        )}
      </span>
      {loading && (
        <LoadingSpinner
          className='loading-spinner'
          width={24}
          height={24} />
      )}
    </ButtonBase>
    <style jsx>{`
      .button-label {
        width: 100%;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
      }
      :global(.button) {
        position: relative;
      }
    `}</style>
  </>
);

export default Button;
