const express = require('express');
const app = express();
const casosRoutes = require('./routes/casosRoutes');
const agentesRoutes = require('./routes/agentesRoutes'); // ✅ Novo

// Middleware para aceitar JSON
app.use(express.json());

// Rotas principais
app.use('/casos', casosRoutes);
app.use('/agentes', agentesRoutes); // ✅ Novo

// Rota base
app.get('/', (req, res) => {
  res.send('API do Departamento de Polícia - Etapa 2');
});

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🚓`);
});
