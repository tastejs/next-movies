
import StickyBox from 'react-sticky-box';

import SidebarInnerWrapper from './SidebarInnerWrapper';
import Menu from 'components/Menu';

const Sidebar = () => (
  <StickyBox>
    <SidebarInnerWrapper>
      <Menu />
    </SidebarInnerWrapper>
  </StickyBox>
);

export default Sidebar;
