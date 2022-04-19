import { async } from 'regenerator-runtime';
import * as model from './model.js';
import view from './view.js';
import pagination1 from './pagination.js';

const controlInfo = async function () {
  const movieName = view.takingValue();
  const a = await model.getInfo(movieName);
  pagination1.rendor(model.state);
  view.rendor(model.pageModel());
};
const controlPage = function (page) {
  view.rendor(model.pageModel(page));
};
const init = function () {
  view.addHandleFunc(controlInfo);
  pagination1.addHandleFunc(controlPage);
};
init();
