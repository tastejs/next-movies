

import AdSectionWrapper from 'parts/AdSectionWrapper';
import Website from 'parts/Website';
import Imdb from 'parts/Imdb';

const PersonAdSection = ({
  websiteUrl,
  imdbId
}) => (
  <AdSectionWrapper>
    <Website href={websiteUrl} />
    <Imdb id={imdbId} />
  </AdSectionWrapper>
);

export default PersonAdSection;
