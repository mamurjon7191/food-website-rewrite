import * as model from './model.js';

import rendor from './views/recipeView.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

let showRecipe = async function () {
  let id = window.location.hash.slice(1);
  await model.model(id);
  rendor.umumiy(model.state.obj);
};

['hashchange', 'load'].map(val => {
  window.addEventListener(val, showRecipe);
});
