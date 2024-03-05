import { ReviewsListContainer } from 'components/ReviewsList/ReviewsList.styled';
import ReviewItem from 'components/ReviewItem/ReviewItem';

const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsListContainer>
      {reviews.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ReviewsListContainer>
  );
};

export default ReviewsList;
