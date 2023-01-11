import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Section from 'components/Section/Section';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleFormSubmit = newSearchQuery => {
    if (searchQuery !== newSearchQuery) {
      setPage(1);
    }
    setSearchQuery(newSearchQuery);
  };

  const handleOnClickLoadMoreBtn = event => {
    event.preventDefault();
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Routes>
      <Section>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery
          searchQuery={searchQuery}
          page={page}
          loadMore={handleOnClickLoadMoreBtn}
        />
        <NotificationContainer />
      </Section>
    </Routes>
  );
}

App.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
};
