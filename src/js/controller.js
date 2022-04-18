import { async } from 'regenerator-runtime';
import * as model from './model.js';
import view from './view.js';

const controlInfo = async function () {
  const movieName = view.takingValue();
  const a = await model.getInfo(movieName);
  console.log(a);
  view.rendor(a);
};
const init = function () {
  view.addHandleFunc(controlInfo);
};
init();
