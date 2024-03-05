import { CastListContainer } from 'components/CastList/CastList.styled';
import CastItem from 'components/CastItem/CastItem';
import LoadMore from 'components/LoadMoreBtn/LoadMoreBtn';

const CastList = ({ cast, showLoadMore, handleClickLoadMore }) => {
  return (
    <CastListContainer>
      {cast.map(castInd => (
        <CastItem key={castInd.id} castInd={castInd} />
      ))}
      {showLoadMore && <LoadMore onClick={handleClickLoadMore} />}
    </CastListContainer>
  );
};

export default CastList;
