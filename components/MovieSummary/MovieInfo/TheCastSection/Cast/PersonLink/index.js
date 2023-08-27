

import Link from 'next/link';
import Profile from './Profile';
import LINKS from 'utils/constants/links';
import { W185H278 } from 'config/image-sizes';
import QUERY_PARAMS from 'utils/constants/query-params';

const PersonLink = ({
  person,
  baseUrl
}) => (
  <>
    <Link
      href={{
        pathname: LINKS.PERSON.HREF,
        query: {
          [QUERY_PARAMS.ID]: person.id,
          [QUERY_PARAMS.PAGE]: 1
        }
      }}
      legacyBehavior>
      <a>
        <Profile src={`${baseUrl}w${W185H278.WIDTH}${person.profile_path}`} alt={person.name} />
      </a>
    </Link>
    <style jsx>{`
      a {
        display: block;
      }
    `}</style>
  </>
);

export default PersonLink;
