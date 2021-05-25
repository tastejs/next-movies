
import { combineReducers } from 'redux';
import generalReducer from './generalReducer';
import moviesReducer from './moviesReducer';
import movieReducer from './movieReducer';
import personReducer from './personReducer';
import recommendedMoviesReducer from './recommendedMoviesReducer';
import personMoviesReducer from './personMoviesReducer';
import errorsReducer from './errorsReducer';

const combinedReducer = combineReducers({
  general: generalReducer,
  movies: moviesReducer,
  movie: movieReducer,
  person: personReducer,
  recommendedMovies: recommendedMoviesReducer,
  personMovies: personMoviesReducer,
  errors: errorsReducer
});

export default combinedReducer;
