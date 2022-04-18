import { async } from 'regenerator-runtime';
import { helper } from './helper.js';
import { config } from './config.js';

export const state = {
  results: {},
};

export const getInfo = async function (movieName) {
  const a = await helper(config(movieName));
  state.results = a.Search;
  return state.results;
};
