import { MoviesGalleryContainer } from 'components/MoviesGalleryList/MoviesGalleryList.styled';
import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';
import LoadMore from 'components/LoadMoreBtn/LoadMoreBtn';

const MoviesGalleryList = ({ movies, showLoadMore, handleClickLoadMore }) => {
  return (
    <>
      <MoviesGalleryContainer>
        {movies.map(movie => (
          <MovieGalleryItem key={movie.id} movie={movie} />
        ))}
        {showLoadMore && <LoadMore onClick={handleClickLoadMore} />}
      </MoviesGalleryContainer>
    </>
  );
};

export default MoviesGalleryList;
