
import PageWrapper from 'parts/PageWrapper';
import TitleSection from './TitleSection';
import NotFoundImage from './NotFoundImage';
import LinkButton from 'components/LinkButton';
import LINKS from 'utils/constants/links';
import withTheme from 'utils/hocs/withTheme';
import HomeIcon from 'public/assets/svgs/icons/home.svg';

const NotFound = ({
  theme,
  title,
  subtitle
}) => (
  <>
    <PageWrapper className='not-found'>
      <TitleSection
        title={title}
        subtitle={subtitle} />
      <NotFoundImage
        src='/assets/svgs/empty.svg'
        alt='Not found!' />
      <LinkButton
        href={LINKS.HOME.HREF}
        buttonProps={{
          contained: true,
          left: true,
          title: 'Home',
          icon: (
            <HomeIcon
              fill='currentColor'
              width='1.125em' />
          )
        }} />
    </PageWrapper>
    <style jsx>{`
      :global(.not-found) {
        align-items: center;
        // TODO: CSS clean-up required
        // height: 100%;
        // align-self: center;
        // justify-content: space-evenly;
      }
      @media ${theme.mediaQueries.medium} {
        :global(.not-found) {
          width: 65%;
        }
      }
    `}</style>
  </>
);

export default withTheme(NotFound);
