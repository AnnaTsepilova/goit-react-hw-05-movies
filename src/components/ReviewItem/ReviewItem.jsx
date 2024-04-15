import ReadMoreReview from 'components/ReadMoreReview/ReadMoreReview';
import {
  ReviewCard,
  AuthorName,
} from 'components/ReviewItem/ReviewItem.styled';

const ReviewItem = ({ review }) => {
  return (
    <ReviewCard>
      <AuthorName>{review.author}</AuthorName>
      <ReadMoreReview>{review.content}</ReadMoreReview>
    </ReviewCard>
  );
};

export default ReviewItem;
