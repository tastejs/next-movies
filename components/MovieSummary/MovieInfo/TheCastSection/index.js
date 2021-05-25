
import SummarySectionHeading from 'parts/SummarySectionHeading';
import Cast from './Cast';

const TheCastSection = ({
  className,
  cast,
  baseUrl
}) => (
  <div className={className}>
    <SummarySectionHeading>The Cast</SummarySectionHeading>
    <Cast
      cast={cast}
      baseUrl={baseUrl} />
  </div>
);

export default TheCastSection;
