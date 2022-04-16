const express = require('express');
const router = express.Router();

const LembretesController = require('../controllers/lembretes-controller');

router.get('/', LembretesController.pegarTodosLembretes); // Pegar todos os lembretes
router.post('/', LembretesController.criarLembrete); // Criar um novo lembrete
router.get('/:id', LembretesController.pegarLembrete); // Pegar lembrete por id
router.delete('/:id', LembretesController.deletarLembrete); // Deletar lembrete
router.get('/favoritos', LembretesController.buscarFavoritos); // Buscar favoritos

module.exports= router;