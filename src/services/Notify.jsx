import { NotificationManager } from 'react-notifications';

const INFO_MESSAGE =
  "We're sorry, but you've reached the end of search results.";
const EMPTY_QUERY_MESSAGE = 'Please enter your search query.';
const NO_FOUND_MESSAGE =
  'Sorry, there are no movies matching your search query. Please try again.';
const NO_FOUND_REVIEWS = "We don't have any reviews for this movie.";
const ERROR_MESSAGE = 'API error:';

function NotificationInfo(message) {
  NotificationManager.info(message);
}
function NotificationWarning(message) {
  NotificationManager.warning(message);
}
function NotificationError(message) {
  NotificationManager.error(message);
}

export {
  INFO_MESSAGE,
  EMPTY_QUERY_MESSAGE,
  NO_FOUND_MESSAGE,
  NO_FOUND_REVIEWS,
  ERROR_MESSAGE,
  NotificationInfo,
  NotificationWarning,
  NotificationError,
};
