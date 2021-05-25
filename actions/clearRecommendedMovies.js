import * as TYPES from './types';

// Set loading to true for next render
const clearRecommendedMovies = () => ({type: TYPES.SET_RECOMMENDED_MOVIES_LOADING});

export default clearRecommendedMovies;
