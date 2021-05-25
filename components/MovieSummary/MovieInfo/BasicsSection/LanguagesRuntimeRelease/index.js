

import withTheme from 'utils/hocs/withTheme';

const getYear = date => {
  if (!date) {
    return;
  }
  const [year] = date.split('-');
  return year;
};

const renderInfo = (spokenLanguages, runtime, releaseDate) => {
  const pieces = [];
  if (spokenLanguages.length !== 0) {
    pieces.push(spokenLanguages[0].name);
  }
  pieces.push(runtime, releaseDate);

  return pieces
    .filter(element => element !== null)
    .map(element => (typeof element === 'number' ? `${element} min.` : element))
    .map((element, index, array) => (index !== array.length - 1 ? `${element} / ` : element));
};

const LanguagesRuntimeRelease = ({
  theme,
  spokenLanguages,
  runtime,
  releaseDate
}) => (
  <>
    <div className='languages-runtime-release'>
      {renderInfo(spokenLanguages, runtime, getYear(releaseDate))}
    </div>
    <style jsx>{`
      .languages-runtime-release {
        color: var(--palette-warning-main);
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightBold};
        line-height: 1;
        text-transform: uppercase;
      }
    `}</style>
  </>
);

export default withTheme(LanguagesRuntimeRelease);
