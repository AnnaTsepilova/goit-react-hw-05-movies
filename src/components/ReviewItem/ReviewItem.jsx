import PropTypes from 'prop-types';
import {
  ReviewCard,
  AuthorName,
  Text,
} from 'components/ReviewItem/ReviewItem.styled';

export default function ReviewItem({ review }) {
  return (
    <ReviewCard>
      <AuthorName>{review.author}</AuthorName>
      <Text>{review.content}</Text>
    </ReviewCard>
  );
}

ReviewItem.propTypes = {
  review: PropTypes.objectOf(
    PropTypes.shape({
      author: PropTypes.object,
      content: PropTypes.string,
    })
  ).isRequired,
};
