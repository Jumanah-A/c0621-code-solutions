module.exports = function deleteItem(idNo, data) {
  delete data.notes[idNo];
  return data;
};
