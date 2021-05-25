
import clsx from 'clsx';

const AspectRatioBox = ({
  className,
  children,
  aspectRatio = 1,
  ...rest
}) => (
  <div
    style={{paddingTop: `${1 / aspectRatio * 100}%`}}
    className='aspect-ratio-box'>
    <div
      className={clsx('aspect-ratio-box-inside', className)}
      {...rest}>
      {children}
    </div>
    <style jsx>{`
      .aspect-ratio-box {
        height: 0;
        overflow: hidden;
        position: relative;
      }
      
      .aspect-ratio-box-inside {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
);

export default AspectRatioBox;
