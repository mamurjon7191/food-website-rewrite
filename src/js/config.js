export const config = function (movieName) {
  const API = `https://omdbapi.com/?s=${movieName}&page=1&apikey=fc1fef96`;
  return API;
};
