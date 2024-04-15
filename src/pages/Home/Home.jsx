import { useState, useEffect } from 'react';

import { MoviesGalleryWrapper, Title } from 'pages/Home/Home.styled';

import MoviesGalleryList from 'components/MoviesGalleryList/MoviesGalleryList';
import Loader from 'components/Loader/Loader';
import { getTrendingMovies } from 'services/moviesApi';
import * as notify from 'services/notifications';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        notify.notificationError(`${notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <MoviesGalleryWrapper>
        <Title>Trending today</Title>
        <MoviesGalleryList movies={movies} />
        {isLoading && <Loader />}
      </MoviesGalleryWrapper>
    </main>
  );
};

export default Home;
