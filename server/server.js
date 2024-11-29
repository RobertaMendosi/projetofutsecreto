const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const mongoose = require('mongoose');
require('dotenv').config();

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/futsecreto', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));


const playerRoutes = require('./routes/playerRoutes'); // Certifique-se de que o caminho está correto

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas da API
app.use('/api', playerRoutes); // Configuração da rota com prefixo '/api'

// Rota raiz
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Configuração do servidor
const PORT = process.env.PORT || 5001; // Porta configurada para 5001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

