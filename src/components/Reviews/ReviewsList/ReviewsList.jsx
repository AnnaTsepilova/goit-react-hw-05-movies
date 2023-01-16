import PropTypes from 'prop-types';

import { ReviewsListContainer } from 'components/Reviews/ReviewsList/ReviewsList.styled';
import ReviewItem from 'components/Reviews/ReviewItem/ReviewItem';

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
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
};
