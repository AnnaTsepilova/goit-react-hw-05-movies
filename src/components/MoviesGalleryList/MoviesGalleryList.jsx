import PropTypes from 'prop-types';

import { MoviesGalleryContainer } from 'components/TrendingMovies/TrendingMovies.styled';
import MoviesGalleryItem from 'components/MoviesGalleryItem/MoviesGalleryItem';

export default function MoviesGalleryList({ movies }) {
  return (
    <MoviesGalleryContainer>
      {movies.map(movie => (
        <MoviesGalleryItem key={movie.id} movie={movie} />
      ))}
    </MoviesGalleryContainer>
  );
}

MoviesGalleryList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};
