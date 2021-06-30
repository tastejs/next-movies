

import Image from 'components/Image';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import { PROFILE_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const PROFILE_WIDTH = 44;
const PROFILE_HEIGHT = 44;

const Profile = ({ src, alt }) => (
  <>
    <Image
      src={src}
      alt={alt}
      width={`${PROFILE_WIDTH}px`}
      height={`${PROFILE_HEIGHT}px`}
      className="center-profile profile-border-radius"
      loadingUI={
        // MEMO: reserve space for preventing layout shifting
        <div
          style={{
            width: `${PROFILE_WIDTH}px`,
            height: `${PROFILE_HEIGHT}px`,
          }}
          className="loading-ui center-profile"
        >
          <LoadingSpinner />
        </div>
      }
      placeholderPath={PROFILE_PLACEHOLDER_IMAGE_PATH}
    />
    <style jsx>{`
      .loading-ui {
        display: flex;
        justify-cotent: center;
        align-items: center;
      }

      :global(.center-profile) {
        margin: 0 auto;
      }

      :global(.profile-border-radius) {
        border-radius: 50%;
      }
    `}</style>
  </>
);

export default Profile;
