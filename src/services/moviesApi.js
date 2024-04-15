import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b0cf6b13af537de1f960eba55e00f400';

async function getTrendingMovies() {
  const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return response;
}

async function getQueryMovies(searchQuery) {
  return await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`
  );
}

async function getMoviesDetails(movie_id) {
  return await axios.get(`movie/${movie_id}?api_key=${API_KEY}`);
}

async function getMoviesGenresList() {
  return await axios.get(`genre/movie/list?api_key=${API_KEY}`);
}

async function getMovieCast(movie_id) {
  return await axios.get(`movie/${movie_id}/credits?api_key=${API_KEY}`);
}

async function getMovieReviews(movieId) {
  return await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
}

export {
  getTrendingMovies,
  getQueryMovies,
  getMoviesDetails,
  getMoviesGenresList,
  getMovieCast,
  getMovieReviews,
};
