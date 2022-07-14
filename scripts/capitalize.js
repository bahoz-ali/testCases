module.exports = function capitalize(text = '') {
  text = text.replace(/[^a-zA-Z ]/g, '');

  const firstChar = text.substring(0, 1).toUpperCase();

  return firstChar + text.substring(1).toLocaleLowerCase();
};
