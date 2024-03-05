import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as notify from 'services/notifications';

import { getMovieCast } from 'services/moviesApi';
import Loader from 'components/Loader/Loader';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [castLimited, setCastLimited] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const castItemsLimit = 12;

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await getMovieCast(movieId);
        if (data.cast.length) {
          setCast(data.cast);
          setCastLimited(data.cast.slice(0, castItemsLimit));
          setShowLoadMore(castItemsLimit <= data.cast.length);
        } else {
          notify.notificationError(notify.NO_FOUND_CAST);
        }
      } catch (error) {
        notify.notificationError(`${notify.ERROR_MESSAGE} ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  function handleClickLoadMoreCast() {
    const loadMoreAcc = castLimited.length + castItemsLimit;
    setCastLimited(cast.slice(0, loadMoreAcc));
    setShowLoadMore(!(loadMoreAcc >= cast.length));
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CastList
          cast={castLimited}
          showLoadMore={showLoadMore}
          handleClickLoadMore={handleClickLoadMoreCast}
        />
      )}
    </>
  );
};

export default Cast;
