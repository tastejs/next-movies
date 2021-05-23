
import SummarySectionHeading from 'parts/SummarySectionHeading';

const TextSection = ({
  className,
  heading,
  text
}) => (
  <>
    <div className={className}>
      <SummarySectionHeading>{heading}</SummarySectionHeading>
      <p className='text'>{text}</p>
    </div>
    <style jsx>{`
      .text {
        color: var(--palette-text-secondary);
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.8;
      }
    `}</style>
  </>
);

export default TextSection;
