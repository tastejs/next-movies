

import clsx from 'clsx';

const CLASS_NAME = 'form-control';

const FormControl = ({
  className,
  ...rest
}) => (
  <>
    <div
      className={clsx(CLASS_NAME, className)}
      {...rest} />
    <style jsx>{`
      .${CLASS_NAME} {
        margin: 8px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .${CLASS_NAME} > :global(label + *) {
        margin-top: 4px;
      }
    `}</style>
  </>
);

export default FormControl;
