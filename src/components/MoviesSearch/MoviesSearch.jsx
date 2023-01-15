import { useState } from 'react';
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

  const handleSearchQuery = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (searchQuery.trim() === '') {
      return Notify.NotificationWarning(Notify.EMPTY_QUERY_MESSAGE);
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    form.reset();
  };

  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          name="searchQuery"
          autocomplete="off"
          placeholder="Search movies"
          value={searchQuery}
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
