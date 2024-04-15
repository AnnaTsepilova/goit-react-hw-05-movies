import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesGalleryWrapper } from 'pages/Home/Home.styled';
import { MoviesPageWrapper } from 'pages/Movies/Movies.styled';

import MoviesSearch from 'components/MoviesSearch/MoviesSearch';
import MoviesGalleryList from 'components/MoviesGalleryList/MoviesGalleryList';
import Loader from 'components/Loader/Loader';
import { getQueryMovies } from 'services/moviesApi';
import * as notify from 'services/notifications';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryParams = searchParams.get('search');

  const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    let query = form.searchQuery.value.toLowerCase();
    setSearchParams(query !== '' ? { search: query } : {});

    if (query.trim() === '') {
      return notify.notificationWarning(notify.EMPTY_QUERY_MESSAGE);
    }

    form.reset();
  };

  useEffect(() => {
    if (!searchQueryParams) {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await getQueryMovies(searchQueryParams);

        setMovies(data.results);
        setIsLoading(false);

        if (!data.results.length) {
          notify.notificationError(notify.NO_FOUND_MESSAGE);
        }
      } catch (error) {
        notify.notificationError(`${notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [searchQueryParams]);

  return (
    <MoviesPageWrapper>
      <MoviesSearch onHandleSubmit={handleFormSubmit} />
      <MoviesGalleryWrapper>
        {movies && <MoviesGalleryList movies={movies} />}

        {isLoading && <Loader />}
      </MoviesGalleryWrapper>
    </MoviesPageWrapper>
  );
};

export default Movies;
