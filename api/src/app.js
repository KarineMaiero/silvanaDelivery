//função: armanezar as principais importações e informações da aplicação

const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./config/mongoConfig');
const userRoutes = require('./routes/userRoutes');

db.connect();

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);

//rotas


//rota principal


module.exports = app;