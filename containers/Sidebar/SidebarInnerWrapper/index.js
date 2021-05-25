
const SidebarInnerWrapper = ({ children }) => (
  <>
    <div className='sidebar-inner-wrapper'>{children}</div>
    <style jsx>{`
      .sidebar-inner-wrapper {
        display: flex;
        flex-direction: column;
        width: 25rem;
        padding: 2rem;
        margin-top: 4rem;
        border-right: 1px solid var(--palette-divider);
      }
    `}</style>
  </>
);

export default SidebarInnerWrapper;
