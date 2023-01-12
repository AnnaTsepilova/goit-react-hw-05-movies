import PropTypes from 'prop-types';
import {
  MoviesGalleryCard,
  MoviePoster,
  Description,
  MovieTitle,
  MovieDateRelease,
} from 'components/MoviesGalleryItem/MoviesGalleryItem.styled';

export default function MoviesGalleryItem({ movie }) {
  const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const parsedDate = new Date(movie.release_date);
  const releaseDate = parsedDate.toLocaleDateString();

  return (
    <>
      <MoviesGalleryCard>
        <MoviePoster src={posterPath} alt={movie.title} />
        <Description>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDateRelease>Release date: {releaseDate}</MovieDateRelease>
        </Description>
      </MoviesGalleryCard>
    </>
  );
}

MoviesGalleryItem.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      posterPath: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
    })
  ).isRequired,
};
