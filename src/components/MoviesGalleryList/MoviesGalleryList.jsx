import PropTypes from 'prop-types';

import { MoviesGalleryContainer } from 'components/MoviesGalleryList/MoviesGalleryList.styled';
import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';

export default function MoviesGalleryList({ movies }) {
  return (
    <>
      <MoviesGalleryContainer>
        {movies.map(movie => (
          <MovieGalleryItem key={movie.id} movie={movie} />
        ))}
      </MoviesGalleryContainer>

      {/* {movies && (
        <MoviesGalleryContainer>
          {movies.map(movie => (
            <MovieGalleryItem key={movie.id} movie={movie} />
          ))}
        </MoviesGalleryContainer>
      )} */}
    </>
  );
}

MoviesGalleryList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};
