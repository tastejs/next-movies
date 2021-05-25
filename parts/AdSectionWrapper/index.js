

import BackButton from 'components/BackButton';
import withTheme from 'utils/hocs/withTheme';

const AdSectionWrapper = ({
  theme,
  children
}) => (
  <>
    <div className='ad-section-wrapper'>
      <div className='ad-section-wrapper-links'>
        {children}
      </div>
      <BackButton />
    </div>
    <style jsx>{`
      .ad-section-wrapper {
        display: flex;
        align-items: center;
      }

      .ad-section-wrapper-links {
        display: flex;
        margin-right: auto;
      }

      :global(.ad-section-wrapper-links > *:not(:last-child)) {
        margin-right: 2rem;
      }

      @media ${theme.mediaQueries.large} {
        :global(.ad-section-wrapper-links > *:not(:last-child)) {
          margin-right: 1rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(AdSectionWrapper);
