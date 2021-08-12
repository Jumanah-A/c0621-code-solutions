module.exports = function update(data, idNo, content) {
  data.notes[idNo] = content;
  return data;
};
