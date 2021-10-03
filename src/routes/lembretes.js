const express = require('express');
const router = express.Router();

const LembretesController = require('../controllers/lembretes-controller');

router.get('/', LembretesController.pegarTodosLembretes); // Pegar todos os lembretes
// router.get('/:id', LembretesController.pegarLembrete); // Pegar o lembrete por id
// router.post('/', LembretesController.criarLembrete); // Criar um novo lembrete
// router.put('/:id', LembretesController.editarLembrete); // Editar um lembrete

module.exports= router;