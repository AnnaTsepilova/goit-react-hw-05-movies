import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import * as notify from 'services/notifications';

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

import { getMoviesDetails } from 'services/moviesApi';
import ButtonGoBack from 'components/BackLink/BackLink';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState([]);
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
        const { data } = await getMoviesDetails(movieId);
        setMovie(data);
        setGenres(data.genres.map(genre => genre.name).join(' '));
      } catch (error) {
        notify.notificationError(`${notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
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
              <AddInfoLink to={`cast`} state={location.state}>
                Cast
              </AddInfoLink>
              <AddInfoLink to={`reviews`} state={location.state}>
                Reviews
              </AddInfoLink>
            </AddInfoWrapper>
          </MovieCard>
        )}
      </MovieCardContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
