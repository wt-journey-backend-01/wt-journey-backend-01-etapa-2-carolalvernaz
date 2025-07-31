const agentesRepo = require('../repositories/agentesRepository');

function getAll(req, res) {
  res.status(200).json(agentesRepo.findAll());
}

function getById(req, res) {
  const agente = agentesRepo.findById(req.params.id);
  if (!agente) return res.status(404).json({ error: 'Agente não encontrado' });
  res.status(200).json(agente);
}

function create(req, res) {
  const { id, nome, dataDeIncorporacao, cargo } = req.body;

  if (!id || !nome || !dataDeIncorporacao || !cargo) {
    return res.status(400).json({
      status: 400,
      message: 'Parâmetros inválidos',
      errors: [
        "Campos obrigatórios: id, nome, dataDeIncorporacao, cargo"
      ]
    });
  }

  const novoAgente = { id, nome, dataDeIncorporacao, cargo };
  agentesRepo.create(novoAgente);
  res.status(201).json(novoAgente);
}

function update(req, res) {
  const atualizado = agentesRepo.update(req.params.id, req.body);
  if (!atualizado) return res.status(404).json({ error: 'Agente não encontrado' });
  res.status(200).json(atualizado);
}

function partialUpdate(req, res) {
  const atualizado = agentesRepo.partialUpdate(req.params.id, req.body);
  if (!atualizado) return res.status(404).json({ error: 'Agente não encontrado' });
  res.status(200).json(atualizado);
}

function remove(req, res) {
  const removido = agentesRepo.remove(req.params.id);
  if (!removido) return res.status(404).json({ error: 'Agente não encontrado' });
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
