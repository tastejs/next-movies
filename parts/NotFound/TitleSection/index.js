
const TitleSection = ({
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
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin-bottom: 6rem;
      }

      .title-section .title {
        color: var(--palette-text-primary);
        font-weight: 300;
        font-size: 3.5rem;
      }

      .title-section .subtitle {
        color: var(--palette-text-primary);
        font-weight: 700;
        font-size: 1.8rem;
      }
    `}</style>
  </>
);

export default TitleSection;
