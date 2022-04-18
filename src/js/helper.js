export const helper = async function (url) {
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
};
