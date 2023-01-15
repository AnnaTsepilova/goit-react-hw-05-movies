import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

import {
  SearchWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/MoviesSearch/MoviesSearch.styled';

import * as Notify from 'services/Notify';

export default function MoviesSearch({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchQuery = event => {
    let value = event.currentTarget.value.toLowerCase();
    setSearchParams(value !== '' ? { search: value } : {});
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    let query = form.searchQuery.value.toLowerCase();
    if (query.trim() === '') {
      return Notify.NotificationWarning(Notify.EMPTY_QUERY_MESSAGE);
    }
    onSubmit(query);
    setSearchQuery('');
    form.reset();
  };

  useEffect(() => {
    const search = searchParams.get('search') ?? '';
    console.log('test: ', search, searchQuery);
    setSearchQuery(search);
    if (!searchQuery) {
      return;
    }

    onSubmit(search);
  }, [searchQuery]);

  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          name="searchQuery"
          autocomplete="off"
          placeholder="Search movies"
          onChange={handleSearchQuery}
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
}

// MoviesSearch.propTypes = {
//   response: PropTypes.object,
// };
