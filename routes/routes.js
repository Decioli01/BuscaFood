const db = require('../database/connection');
const express = require("express");


const router = express.Router();

const ingredientesController = require('../controllers/ingredientesController');

// DEFINIÇÃO DAS ROTAS
router.get ('/ingredientes', ingredientesController.listarIngredientes);

module.exports = router;