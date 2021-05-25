
import TextSection from 'parts/TextSection';

const TheSynopsisSection = ({
  className,
  synopsis
}) => (
  <TextSection
    className={className}
    heading='The Synopsis'
    text={synopsis} />
);

export default TheSynopsisSection;
