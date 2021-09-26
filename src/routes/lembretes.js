const express = require('express');
const router = express.Router();
const db = require('../db').pool;

//PEGA LEMBRETES EXISTENTES
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem:'Buscando lembretes'
    });
});

// CRIA UM NOVO LEMBRETE
router.post("/", (req, res, next) => {

    const { id, titulo, descricao, datal } = req.body;

    db.connect();

    db.query(
        'INSERT INTO lembretes (id, titulo, descricao, datal) VALUES ($1, $2, $3, $4)',
        [id, titulo, descricao, datal]
      );

      res.status(201).send({
        message: "Lembrete adicionado com sucesso!",
        body: {
          lembrete: { id, titulo, descricao, datal }
        },
      });
});

//EDITA UM LEMBRETE
router.put("/", (req, res, next) => {
    res.status(200).send({
        mensagem:'Editando lembrete'
    });
});

module.exports = router;

