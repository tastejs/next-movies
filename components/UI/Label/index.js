

import clsx from 'clsx';

const CLASS_NAME = 'label';

const Label = ({
  className,
  ...rest
}) => (
  <>
    <label
      className={clsx(CLASS_NAME, className)}
      {...rest} />
    <style jsx>{`
      .${CLASS_NAME} {
        font-size: 1.5rem;
      }
    `}</style>
  </>
);

export default Label;
