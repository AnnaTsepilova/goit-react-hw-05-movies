import { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Outlet, useSearchParams } from 'react-router-dom';

import { MoviesGalleryWrapper } from 'pages/Home/Home.styled';

import MoviesSearch from 'components/MoviesSearch/MoviesSearch';
import MoviesGalleryList from 'components/MoviesGalleryList/MoviesGalleryList';
import Loader from 'components/Loader/Loader';
import { FetchQueryMovies } from 'services/MoviesApi';
import * as Notify from 'services/Notify';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = newSearchQuery => {
    if (searchQuery !== newSearchQuery) {
      setPage(1);
    }
    setSearchQuery(newSearchQuery);
  };
  // const changeSearch = value => {
  //   setSearchParams(value !== '' ? { search: value } : {});
  // };
  // const search = searchParams.get('search') ?? '';

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
        {movies && <MoviesGalleryList movies={movies} page={page} />}
        {isLoading && <Loader />}
      </MoviesGalleryWrapper>
    </main>
  );
}

Movies.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
};
