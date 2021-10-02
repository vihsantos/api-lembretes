const express = require('express');
const router = express.Router();
const db = require('../db').pool;

router.get('/', ""); // Pegar todos os lembretes
router.get('/:id', ""); // Pegar o lembrete por id
router.post('/', ""); // Criar um novo lembrete
router.put('/:id', "") // Editar um lembrete

module.exports= router;