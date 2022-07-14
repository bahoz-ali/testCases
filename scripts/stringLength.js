function length(str) {
  if (!str || str.length < 1 || str.length > 10) {
    throw new Error('str is not valid.');
  }

  return str.length;
}

module.exports = length;
