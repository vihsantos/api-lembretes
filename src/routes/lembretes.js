const express = require('express');
const router = express.Router();

//PEGA LEMBRETES EXISTENTES
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem:'Buscando lembretes'
    });
});

// CRIA UM NOVO LEMBRETE
router.post("/", (req, res, next) => {
    res.status(200).send({
        mensagem:'Enviando lembrete'
    });
});

//EDITA UM LEMBRETE
router.put("/", (req, res, next) => {
    res.status(200).send({
        mensagem:'Editando lembrete'
    });
});

module.exports = router;

