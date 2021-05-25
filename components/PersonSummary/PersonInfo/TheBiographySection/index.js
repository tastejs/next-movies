

import TextSection from 'parts/TextSection';

const TheBiographySection = ({
  className,
  synopsis
}) => (
  <TextSection
    className={className}
    heading='The Biography'
    text={synopsis} />
);

export default TheBiographySection;
