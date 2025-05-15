const express = require('express');
const router = express.Router();
const controller = require('../controllers/cursoController');

router.post('/', controller.create);

module.exports = router;

// Rota para enviar o pedido de exclusão ao controller
router.post('/delete/:id', controller.delete);