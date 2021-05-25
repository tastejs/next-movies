
import Label from 'components/UI/Label';
import FormControl from 'components/UI/FormControl';

const TextInput = ({
  id = 'input',
  label,
  ...rest
}) => (
  <>
    <FormControl>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        id={id}
        type='text'
        {...rest} />
    </FormControl>
    <style jsx>{`
      input[type=text] {
        width: 100%;
        padding: 12px 16px;
        color: var(--palette-text-primary);
        font-size: 1.5rem;
        box-sizing: border-box;
        border: 1px solid var(--palette-divider);
        background-color: var(--palette-background-paper);
        transition: color var(--duration) var(--timing), background-color var(--duration) var(--timing);
        outline: none;
      }
    `}</style>
  </>
);

export default TextInput;
