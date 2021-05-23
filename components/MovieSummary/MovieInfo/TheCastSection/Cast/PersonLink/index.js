
import Link from 'next/link';
import Profile from './Profile';
import LINKS from 'utils/constants/links';

const PersonLink = ({
  person,
  baseUrl
}) => (
  <>
    <Link
      href={LINKS.PERSON.HREF}
      as={`${LINKS.PERSON.AS_PREFIX}/${person.id}`}>
      <a>
        {/* TODO: hardcoded size */}
        <Profile src={`${baseUrl}w185${person.profile_path}`} />
      </a>
    </Link>
    <style jsx>{`
      a {
        // TODO: could be a global style
        text-decoration: none;
        // TODO: do we need?
        // height: 100%;
        // display: flex;
        // align-items: center;
        // justify-content: center;
      }
    `}</style>
  </>
);

export default PersonLink;
