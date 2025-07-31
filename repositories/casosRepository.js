const casos = [];

function findAll() {
  return casos;
}

function findById(id) {
  return casos.find(c => c.id === id);
}

function create(caso) {
  casos.push(caso);
  return caso;
}

function update(id, data) {
  const index = casos.findIndex(c => c.id === id);
  if (index === -1) return null;
  casos[index] = { ...data, id }; // preserva o ID
  return casos[index];
}

function partialUpdate(id, data) {
  const caso = casos.find(c => c.id === id);
  if (!caso) return null;
  Object.assign(caso, data);
  return caso;
}

function remove(id) {
  const index = casos.findIndex(c => c.id === id);
  if (index === -1) return false;
  casos.splice(index, 1);
  return true;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  partialUpdate,
  remove
};
