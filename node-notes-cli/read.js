module.exports = function read(content) {
  for (var key in content) {
    console.log(`${key}: ${content[key]}`);
  }
};
