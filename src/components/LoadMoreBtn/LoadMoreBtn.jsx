import { LoadMoreBtn } from './LoadMoreBtn.styled';

const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};

export default LoadMore;
