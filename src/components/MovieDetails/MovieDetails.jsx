import PropTypes from 'prop-types';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
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
  const navigate = useNavigate();
  const location = useLocation();

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

  const onBtnClick = () => {
    location.state
      ? navigate(location.state.pathname + location.state.search)
      : navigate('/');
  };

  return (
    <>
      <MovieCardContainer>
        <ButtonGoBack onClick={onBtnClick} />
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
          </MovieCard>
        )}
      </MovieCardContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
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
