import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Notify from 'services/Notify';

import { GetMovieReviews } from 'services/MoviesApi';
import Loader from 'components/Loader/Loader';
import ReviewsList from 'components/Reviews/ReviewsList/ReviewsList';

export default function Reviews() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await GetMovieReviews(movieId);
        if (response.data.results.length) {
          setReviews(response.data.results);
        } else {
          Notify.NotificationError(Notify.NO_FOUND_REVIEWS);
        }
      } catch (error) {
        Notify.NotificationError(`${Notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return <>{isLoading ? <Loader /> : <ReviewsList reviews={reviews} />}</>;
}

Reviews.propTypes = {
  movie: PropTypes.object,
};
