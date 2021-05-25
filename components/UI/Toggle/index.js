
import withTheme from 'utils/hocs/withTheme';

const Toggle = ({
  theme,
  id,
  checked,
  onChange
}) => (
  <>
    <span className='toggle'>
      <input
        className='toggle-track'
        type='checkbox'
        checked={checked}
        onChange={onChange}
        id={`toggle-track-${id}`} />
      <label
        style={{color: 'transparent'}}
        htmlFor={`toggle-track-${id}`}>
        Toggle Switch
      </label>
    </span>
    <style jsx>{`
      .toggle {
        position: relative;
        padding: 0 6px;
        display: flex;
        align-items: center;
      }

      input[type='checkbox'].toggle-track {
        width: 34px;
        height: 14px;
        opacity: 0.5;
        background-color: var(--palette-secondary-main);
        position: relative;
        border-radius: 7px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        vertical-align: 2px;
        outline: none;
      }

      input[type='checkbox'].toggle-track:checked + label {
        left: 20px;
      }
    
      input[type='checkbox'].toggle-track:focus-visible {
        outline: solid 2px white;
      }
    
      input[type='checkbox'].toggle-track + label {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transition: all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
        cursor: pointer;
        position: absolute;
        left: 2px;
        background-color: var(--palette-secondary-main);
      }
    `}</style>
  </>
);

export default withTheme(Toggle);
