import { async } from 'regenerator-runtime';
import { helper } from './helper.js';
import { config } from './config.js';

export const state = {
  results: [],
  page: 1,
};

export const getInfo = async function (movieName) {
  const a = await helper(config(movieName));
  state.results = a.Search;
  return state.results;
};

export const pageModel = function (page = state.page) {
  state.page = page;
  const start = 4 * (page - 1);
  const end = page * 4;
  const a = state.results.slice(start, end);
  return a;
};
