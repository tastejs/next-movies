

const TitleSection = ({
  theme,
  title,
  subtitle
}) => (
  <>
    <div className='title-section'>
      <h1 className='title'>{title}</h1>
      <h2 className='subtitle'>{subtitle}</h2>
    </div>
    <style jsx>{`
      .title-section {
        text-align: center;
        margin-bottom: 6rem;
      }

      .title-section .title {
        color: var(--palette-text-primary);
        font-weight: ${theme.typography.fontWeightLight};
        font-size: 3.75rem;
      }

      .title-section .subtitle {
        color: var(--palette-text-secondary);
        font-weight: ${theme.typography.fontWeightBold};
        font-size: 2.125rem;
      }
    `}</style>
  </>
);

export default TitleSection;
