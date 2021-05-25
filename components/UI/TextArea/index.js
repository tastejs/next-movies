

import Label from 'components/UI/Label';
import FormControl from 'components/UI/FormControl';

const TextArea = ({
  id = 'text-area',
  label,
  ...rest
}) => (
  <FormControl>
    {label && <Label htmlFor={id}>{label}</Label>}
    <textarea
      id={id}
      {...rest} />
    <style jsx>{`
      textarea {
        width: 100%;
        height: 150px;
        padding: 12px 16px;
        color: var(--palette-text-primary);
        font-size: 1.5rem;
        font-family: inherit;
        box-sizing: border-box;
        border: 1px solid var(--palette-divider);
        transition: color var(--duration) var(--timing), background-color var(--duration) var(--timing);
        outline: none;
        background-color: var(--palette-background-paper);
        resize: none;
      }
    `}</style>
  </FormControl>
);

export default TextArea;
