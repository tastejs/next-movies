
import ButtonWrapper from './ButtonWrapper';

const Button = ({
  left,
  title,
  icon,
  ...rest
}) => (
  <ButtonWrapper
    left={left}
    {...rest}>
    <div
      style={{
        marginRight: left ? '10px' : 'unset',
        marginLeft: left ? 'unset' : '10px',
      }}>
      {icon}
    </div>
    {title}
  </ButtonWrapper>
);

export default Button;
