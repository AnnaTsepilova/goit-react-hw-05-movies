import { ImSearch } from 'react-icons/im';

import {
  SearchWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/MoviesSearch/MoviesSearch.styled';

const MoviesSearch = ({ onHandleSubmit }) => {
  return (
    <SearchWrapper>
      <SearchForm onSubmit={onHandleSubmit}>
        <SearchFormInput
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search movies"
        />
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <ImSearch
            style={{
              width: '1.5em',
              height: '1.5em',
              fill: 'rgb(253, 81, 3)',
            }}
          />
        </SearchFormButton>
      </SearchForm>
    </SearchWrapper>
  );
};

export default MoviesSearch;
