

import LoadingSpinner from 'components/UI/LoadingSpinner';
import withTheme from 'utils/hocs/withTheme';

const ImageLoadingPlaceholder = ({ theme }) => (
  <>
    <div className='image-loading-placeholder'>
      <LoadingSpinner />
    </div>
    <style jsx>{`
      .image-loading-placeholder {
        width: 100%;
        height: 100%;
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: ${theme.shadows[1]};
      }
    `}</style>
  </>
);

export default withTheme(ImageLoadingPlaceholder);
