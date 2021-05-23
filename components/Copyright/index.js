
const Copyright = ({ isMobile }) => (
  <>
    <div>
      Copyright ©
      <a href='https://www.github.com/addyosmani'>
        Addy Osmani
      </a>
    </div>
    <style jsx>{`
      div {
        display: flex;
        align-self: center;
        align-items: center;
        color: var(--palette-text-primary);
        margin-bottom: ${isMobile ? '2rem' : ''};
      }
      a {
        color: inherit;
        margin-left: 4px;
        font-weight: 500;
        text-decoration: none;
      }
    `}</style>
  </>
);

export default Copyright;
