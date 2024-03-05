import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as notify from 'services/notifications';

import { getMovieReviews } from 'services/moviesApi';
import Loader from 'components/Loader/Loader';
import ReviewsList from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
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
        const { data } = await getMovieReviews(movieId);
        if (data.results.length) {
          setReviews(data.results);
        } else {
          notify.notificationError(notify.NO_FOUND_REVIEWS);
        }
      } catch (error) {
        notify.notificationError(`${notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return <>{isLoading ? <Loader /> : <ReviewsList reviews={reviews} />}</>;
};

export default Reviews;
