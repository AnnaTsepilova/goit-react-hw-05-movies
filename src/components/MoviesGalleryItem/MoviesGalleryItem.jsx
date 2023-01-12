// import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MoviesGalleryCard,
  MoviePoster,
} from 'components/MoviesGalleryItem/MoviesGalleryItem.styled';

export default function MoviesGalleryItem({ movie }) {
  let posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <>
      <MoviesGalleryCard>
        <MoviePoster src={posterPath} alt={movie.title} />
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
    })
  ).isRequired,
};
