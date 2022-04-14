import { API_URL } from './config.js';
import { func } from './helper.js';
export const state = {
  obj: {},
};

export let model = async function (id) {
  let a = await func(API_URL + id);
  const obj = a.data.recipe;
  state.obj = {
    id: obj.id,
    image_url: obj.image_url,
    ingredient: obj.ingredients,
    title: obj.title,
    servings: obj.servings,
    time: obj.cooking_time,
  };
};
