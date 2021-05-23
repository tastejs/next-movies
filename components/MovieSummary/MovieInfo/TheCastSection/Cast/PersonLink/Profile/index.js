
import Image from 'components/Image';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import { PROFILE_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const Profile = props => (
  <>
    <Image
      {...props}
      className='profile-size profile-border-radius'
      loadingUI={
        // MEMO: reserve space for preventing layout shifting
        <div className='loading-ui profile-size'>
          <LoadingSpinner />
        </div>
      }
      placeholderPath={PROFILE_PLACEHOLDER_IMAGE_PATH} />
    <style jsx>{`
      .loading-ui {
        display: flex;
        justify-cotent: center;
        align-items: center;
      }

      :global(.profile-size) {
        width: 5rem;
        height: 5rem;
      }

      :global(.profile-border-radius) {
        border-radius: 50%;
      }
    `}</style>
  </>
);

export default Profile;
