import PropTypes from 'prop-types';
import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Notify from 'services/Notify';

import {
  MovieCardContainer,
  MovieCard,
  MainInfoWrapper,
  PosterWrapper,
  Poster,
  Description,
  MovieTitle,
  DescrTitle,
  Text,
  TextDate,
  AddInfoWrapper,
  SubTitle,
  AddInfoLink,
} from 'components/MovieDetails/MovieDetails.styled';

import { FetchMoviesDetails, GetMovieCast } from 'services/MoviesApi';
import ButtonGoBack from 'components/BackLink/BackLink';
import Loader from 'components/Loader/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);

  let moviePosterSrc = require('services/no-poster.png');
  if (movie.poster_path) {
    moviePosterSrc = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await FetchMoviesDetails(movieId);
        console.log(response);
        setMovie(response.data);
        setGenres(response.data.genres.map(genre => genre.name).join(' '));
      } catch (error) {
        Notify.NotificationError(`${Notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await GetMovieCast(movieId);

        setCast(response.data.cast.map(cast => cast));
      } catch (error) {
        Notify.NotificationError(`${Notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await GetMoviesGenresList();
  //         // console.log(response);
  //         setGenres(response.data.genres);
  //       } catch (error) {
  //         Notify.NotificationError(`${Notify.ERROR_MESSAGE} ${error.message}`);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  return (
    <MovieCardContainer>
      <ButtonGoBack />
      {isLoading ? (
        <Loader />
      ) : (
        <MovieCard>
          <MainInfoWrapper>
            <PosterWrapper>
              <Poster src={moviePosterSrc} alt={movie.title} width={270} />
            </PosterWrapper>
            <Description>
              <MovieTitle>{movie.title}</MovieTitle>
              <TextDate>
                Release date:{' '}
                {new Date(movie.release_date).toLocaleDateString()}
              </TextDate>
              <Text>
                User Score: {Math.round(movie.vote_average * 1000) / 100}%
              </Text>
              <DescrTitle>Overview:</DescrTitle>
              <Text>{movie.overview}</Text>
              <DescrTitle>Genres:</DescrTitle>
              <Text>{genres}</Text>
            </Description>
          </MainInfoWrapper>
          <AddInfoWrapper>
            <SubTitle>Additional information</SubTitle>
            <AddInfoLink to={`cast`}>Cast</AddInfoLink>
            <AddInfoLink to={`reviews`}>Reviews</AddInfoLink>
          </AddInfoWrapper>
          <Outlet />
        </MovieCard>
      )}
    </MovieCardContainer>
  );
}

MovieDetails.propTypes = {
  movieId: PropTypes.number,
  movie: PropTypes.objectOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
    })
  ),
};
