
// MEMO: not used but keep it for future use
const Toggle = ({ checked, onChange }) => (
  <>
    <span className='toggle'>
      <input
        // TODO: rename as dark-mode-check
        className='dark-mode-check'
        type='checkbox'
        checked={checked}
        onChange={onChange}
        id='dark-mode-check' />
      <label htmlFor='dark-mode-check' />
    </span>
    <style jsx>{`
      .toggle {
        position: relative;
        padding: 0 4px;
        display: flex;
        align-items: center;
      }

      input[type='checkbox'].dark-mode-check {
        width: 40px;
        height: 10px;
        background: #555;
        position: relative;
        border-radius: 5px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        vertical-align: 2px;
        outline: none;
      }

      input[type='checkbox'].dark-mode-check:checked + label {
        left: 30px;
      }
    
      input[type='checkbox'].dark-mode-check:focus-visible {
        outline: solid 2px white;
      }
    
      input[type='checkbox'].dark-mode-check + label {
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        transition: all 0.3s ease;
        cursor: pointer;
        position: absolute;
        left: 2px;
        background: #fff;
        opacity: 0.9;
        background-color: #f6f6f6;
      }
    `}</style>
  </>
);

export default Toggle;
