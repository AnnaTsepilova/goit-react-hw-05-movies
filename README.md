## Movie Search

An application designed for searching movies.

## themoviedb.org API

Backend [themoviedb.org API](https://www.themoviedb.org/). The following
endpoints are used in this project:

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  fetches a list of trending movies for today to populate the collection on the
  home page.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  searches for movies by keyword on the movie page.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  fetches full information about a movie for the movie details page.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  fetches information about the cast for the movie details page.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  fetches reviews for the movie details page.

[Посилання на документацію](https://developers.themoviedb.org/3/getting-started/introduction)

## Routes

The application has the following routes. If a user visits a non-existent route,
they will be redirected to the home page.

- `'/'` - component `<HomePage>`, the home page with a list of popular movies.
- `'/movies'` - component `<MoviesPage>`, the page for searching movies by
  keyword.
- `'/movies/:movieId'` - component `<MovieDetailsPage>`, the page with detailed
  information about a movie.
- `/movies/:movieId/cast` - component `<Cast>`, information about the cast.
  Rendered on the `<MovieDetailsPage>`.
- `/movies/:movieId/reviews` - component `<Reviews>`, information about reviews.
  Rendered on the `<MovieDetailsPage>`.

## Code Splitting

Added asynchronous loading of JS code for application routes using
`React.lazy()` і `Suspense`.

### Final Result

![screencapture](./assets/screencapture_1.png)
![screencapture](./assets/screencapture_2.png)
