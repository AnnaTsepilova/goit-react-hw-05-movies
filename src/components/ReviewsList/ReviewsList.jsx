import PropTypes from 'prop-types';

import { ReviewsListContainer } from 'components/ReviewsList/ReviewsList.styled';
import ReviewItem from 'components/ReviewItem/ReviewItem';

export default function ReviewsList({ reviews }) {
  return (
    <ReviewsListContainer>
      {reviews.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ReviewsListContainer>
  );
}

ReviewsList.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
