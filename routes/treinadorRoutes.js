// routes/treinadorRoutes.js
const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/treinadores', treinadorController.getAllTreinadores);
router.get('/treinadores/new', treinadorController.getCreateTreinadorForm);
router.post('/treinadores', treinadorController.createTreinador);

module.exports = router;
