// import PropTypes from 'prop-types';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b0cf6b13af537de1f960eba55e00f400';

async function FetchTrendingMovies() {
  const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return response;
}

// FetchTrendingMovies.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
//   page: PropTypes.number.isRequired,
//   perPage: PropTypes.number.isRequired,
// };

export default FetchTrendingMovies;
