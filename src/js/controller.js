import { async } from 'regenerator-runtime';
import * as model from './model.js';
import view from './view.js';

const controlInfo = async function () {
  const a = await model.getInfo('spider');
  console.log(a);
  view.rendor(a);
};
controlInfo();
