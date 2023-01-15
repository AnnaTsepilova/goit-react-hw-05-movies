// import PropTypes from 'prop-types';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b0cf6b13af537de1f960eba55e00f400';

async function FetchTrendingMovies() {
  const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return response;
}

async function FetchQueryMovies(searchQuery) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`
  );
  return response;
}

async function FetchMoviesDetails(movie_id) {
  const response = await axios.get(`movie/${movie_id}?api_key=${API_KEY}`);
  return response;
}

async function GetMoviesGenresList() {
  const response = await axios.get(`genre/movie/list?api_key=${API_KEY}`);
  return response;
}

async function GetMovieCast(movie_id) {
  const response = await axios.get(
    `movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return response;
}

// async function GetMovieReviews(review_id) {
//   const response = await axios.get(`review/${review_id}?api_key=${API_KEY}`);
//   return response;
// }

async function GetMovieReviews(movieId) {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response;
}

// FetchTrendingMovies.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
//   page: PropTypes.number.isRequired,
//   perPage: PropTypes.number.isRequired,
// };

export {
  FetchTrendingMovies,
  FetchQueryMovies,
  FetchMoviesDetails,
  GetMoviesGenresList,
  GetMovieCast,
  GetMovieReviews,
};
