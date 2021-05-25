

import LazyLoad from 'react-lazyload';

import PosterLink from 'components/PosterLink';
import Scenery from 'components/Scenery';
import DetailsPanelWrapper from 'components/DetailsPanelWrapper';
import PosterTitle from 'components/PosterTitle';
import LINKS from 'utils/constants/links';
import CLASS_NAMES from 'utils/constants/class-names';
import { W500H282 } from 'config/image-sizes';
import QUERY_PARAMS from 'utils/constants/query-params';
import { PUBLIC, PRIVATE } from 'utils/constants/tmdb';

const POSTER_LINK_CLASS_NAME = 'poster-link';
const POSTER_TITLE_CLASS_NAME = 'poster-title-color';

const MyTMDBList = ({
  theme,
  myList,
  baseUrl
}) => (
  <>
    <LazyLoad
      height={200}
      offset={200}>
      <PosterLink
        className={POSTER_LINK_CLASS_NAME}
        href={{
          pathname: LINKS.LIST.HREF,
          query: {
            [QUERY_PARAMS.ID]: myList.id,
            [QUERY_PARAMS.PAGE]: 1
          }
        }}>
        <Scenery
          width={W500H282.WIDTH}
          height={W500H282.HEIGHT}
          src={`${baseUrl}w${W500H282.WIDTH}${myList.backdrop_path}`} />
        <DetailsPanelWrapper theme={theme}>
          <PosterTitle
            theme={theme}
            style={{
              fontSize: '2.125rem',
              fontWeight: theme.typography.fontWeightBold
            }}
            className={POSTER_TITLE_CLASS_NAME}>
            {myList.name}
          </PosterTitle>
          <PosterTitle
            theme={theme}
            style={{
              fontSize: '1.5rem',
              fontWeight: theme.typography.fontWeightMedium
            }}
            className={POSTER_TITLE_CLASS_NAME}>
            {myList.number_of_items} items ({myList.public ? PUBLIC.toUpperCase() : PRIVATE.toUpperCase()})
          </PosterTitle>
        </DetailsPanelWrapper>
      </PosterLink>
    </LazyLoad>
    {/* TODO: styling duplication */}
    <style jsx>{`
      :global(.${POSTER_LINK_CLASS_NAME}:hover .${CLASS_NAMES.IMAGE_LOADING_PLACEHOLDER}) {
        box-shadow: ${theme.shadows[0]};
        border-radius: 0;
      }

      :global(.${POSTER_LINK_CLASS_NAME}:hover .${POSTER_TITLE_CLASS_NAME}) {
        color: var(--palette-text-primary);
      }
    `}</style>
  </>
);

export default MyTMDBList;
