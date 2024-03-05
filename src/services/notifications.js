import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INFO_MESSAGE =
  "We're sorry, but you've reached the end of search results.";
const EMPTY_QUERY_MESSAGE = 'Please enter your search query.';
const NO_FOUND_MESSAGE =
  'Sorry, there are no movies matching your search query. Please try again.';
const NO_FOUND_CAST = "We don't have any cast for this movie.";
const NO_FOUND_REVIEWS = "We don't have any reviews for this movie.";
const ERROR_MESSAGE = 'API error:';

function notificationInfo(message) {
  toast.info(message);
}
function notificationWarning(message) {
  toast.warn(message);
}
function notificationError(message) {
  toast.error(message);
}

export {
  INFO_MESSAGE,
  EMPTY_QUERY_MESSAGE,
  NO_FOUND_MESSAGE,
  NO_FOUND_CAST,
  NO_FOUND_REVIEWS,
  ERROR_MESSAGE,
  notificationInfo,
  notificationWarning,
  notificationError,
};
