module.exports = function create(data, newEntry) {
  data.notes[data.nextId] = newEntry;
  data.nextId += 1;
  return data;
};
