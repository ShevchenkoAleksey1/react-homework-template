import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = 'c17bf6e924f8c464ad14541e0a1a8fcf';
// ----------
export const getTrendingMovie = async page => {
  const response = await axios.get(
    `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};
// ---------
export const getSearchMovie = async (page = 1, query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};
// ---------
export const getDetailsMovie = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

// --------
export const getActorsMovie = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

// --------
export const getReviewsMovie = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
