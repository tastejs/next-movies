
import SummarySectionHeading from 'parts/SummarySectionHeading';
import GenreLink from './GenreLink';

const TheGenresSection = ({
  className,
  genres
}) => (
  <>
    <div className={className}>
      <SummarySectionHeading>The Genres</SummarySectionHeading>
      <div className='the-genres'>
        {genres.map(genre => (
          <GenreLink
            key={genre.id}
            genre={genre} />
        ))}
      </div>
    </div>
    <style jsx>{`
      .the-genres {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
    `}</style>
  </>
);

export default TheGenresSection;
