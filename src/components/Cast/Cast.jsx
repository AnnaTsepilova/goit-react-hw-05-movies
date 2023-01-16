import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Notify from 'services/Notify';

import { GetMovieCast } from 'services/MoviesApi';
import Loader from 'components/Loader/Loader';
import CastList from 'components/Cast/CastList/CastList';

export default function Cast() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await GetMovieCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        Notify.NotificationError(`${Notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return <>{isLoading ? <Loader /> : <CastList cast={cast} />}</>;
}

Cast.propTypes = {
  movieId: PropTypes.number,
  cast: PropTypes.object,
};
