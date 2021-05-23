
import SummaryWrapper from 'parts/SummaryWrapper';
import PersonArtwork from './PersonArtwork';
import PersonInfo from './PersonInfo';

const PersonSummary = ({
  baseUrl,
  person
}) => (
  <SummaryWrapper>
    <PersonArtwork
      // TODO: hardcoded size
      src={`${baseUrl}w780${person.profile_path}`} />
    <PersonInfo
      baseUrl={baseUrl}
      person={person} />
  </SummaryWrapper>
);

export default PersonSummary;
