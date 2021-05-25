

import SelectSearch from 'react-select-search/dist/cjs';
import clsx from 'clsx';

import Label from 'components/UI/Label';
import FormControl from 'components/UI/FormControl';
import defaultClasses from 'components/UI/TheSelectSearch/default-style.module.css';

const TheSelectSearch = React.forwardRef(({
  id,
  name,
  label,
  classes,
  ...rest
}, ref) => (
  <>
    <FormControl>
      {label && <Label htmlFor={id}>{label}</Label>}
      <SelectSearch
        ref={ref}
        className={key => clsx(defaultClasses?.[key], classes?.[key])}
        renderValue={valueProps => (
          <input
            id={id}
            name={name}
            className={clsx(defaultClasses?.['input'], classes?.['input'])}
            {...valueProps} />
        )}
        {...rest} />
    </FormControl>
  </>
));

export default TheSelectSearch;
