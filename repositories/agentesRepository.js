const agentes = [];

function findAll() {
  return agentes;
}

function findById(id) {
  return agentes.find(a => a.id === id);
}

function create(agente) {
  agentes.push(agente);
  return agente;
}

function update(id, data) {
  const index = agentes.findIndex(a => a.id === id);
  if (index === -1) return null;
  agentes[index] = { ...data, id };
  return agentes[index];
}

function partialUpdate(id, data) {
  const agente = agentes.find(a => a.id === id);
  if (!agente) return null;
  Object.assign(agente, data);
  return agente;
}

function remove(id) {
  const index = agentes.findIndex(a => a.id === id);
  if (index === -1) return false;
  agentes.splice(index, 1);
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
