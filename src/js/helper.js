export const func = async function (url) {
  try {
    let one = await fetch(url);
    let two = await one.json();
    return two;
  } catch (err) {
    alert(err);
  }
};
