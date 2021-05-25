
import SidebarInnerWrapper from './SidebarInnerWrapper';
import LazyMenu from 'parts/LazyMenu';
import StickyBox from 'utils/hocs/StickyBox';

const Sidebar = ({ className }) => (
  <StickyBox className={className}>
    <SidebarInnerWrapper>
      {/* TODO: introduce a layout shifting */}
      <LazyMenu />
    </SidebarInnerWrapper>
  </StickyBox>
);

export default Sidebar;
