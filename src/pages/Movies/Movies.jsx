import { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { MoviesGalleryWrapper } from 'pages/Home/Home.styled';

import MoviesSearch from 'components/MoviesSearch/MoviesSearch';
import MoviesGalleryList from 'components/MoviesGalleryList/MoviesGalleryList';
import Loader from 'components/Loader/Loader';
import { FetchQueryMovies } from 'services/MoviesApi';
import * as Notify from 'services/Notify';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = newSearchQuery => {
    setSearchQuery(newSearchQuery);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await FetchQueryMovies(searchQuery);
        setMovies(response.data.results);
      } catch (error) {
        Notify.NotificationError(`${Notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [searchQuery]);

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <MoviesSearch onSubmit={handleFormSubmit} />
      <MoviesGalleryWrapper>
        {movies && <MoviesGalleryList movies={movies} />}
        {isLoading && <Loader />}
      </MoviesGalleryWrapper>
    </main>
  );
}

Movies.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
};
