const casosRepo = require('../repositories/casosRepository');

function getAll(req, res) {
  res.status(200).json(casosRepo.findAll());
}

function getById(req, res) {
  const caso = casosRepo.findById(req.params.id);
  if (!caso) return res.status(404).json({ error: 'Caso não encontrado' });
  res.status(200).json(caso);
}

function create(req, res) {
  const { id, titulo, descricao, status, agente_id } = req.body;

  if (!id || !titulo || !descricao || !['aberto', 'solucionado'].includes(status) || !agente_id) {
    return res.status(400).json({
      status: 400,
      message: 'Parâmetros inválidos',
      errors: [
        "Campos obrigatórios: id, titulo, descricao, status ('aberto' ou 'solucionado'), agente_id"
      ]
    });
  }

  const novoCaso = { id, titulo, descricao, status, agente_id };
  casosRepo.create(novoCaso);
  res.status(201).json(novoCaso);
}

function update(req, res) {
  const updated = casosRepo.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Caso não encontrado' });
  res.status(200).json(updated);
}

function partialUpdate(req, res) {
  const updated = casosRepo.partialUpdate(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Caso não encontrado' });
  res.status(200).json(updated);
}

function remove(req, res) {
  const deleted = casosRepo.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Caso não encontrado' });
  res.status(204).send();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  partialUpdate,
  remove
};
