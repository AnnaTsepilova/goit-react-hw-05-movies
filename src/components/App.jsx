// import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Layout from 'components/Layout/Layout';
// import Movies from 'components/Movies/Movies';
// import MovieDetails from 'components/MovieDetails/MovieDetails';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/movies" element={<p>movies</p>} />

        {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
      {/* <NotificationContainer /> */}
    </>
  );
}

// App.propTypes = {
//   searchQuery: PropTypes.string,
//   page: PropTypes.number,
// };
