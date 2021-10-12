const { lembrete } = require('../models')

exports.pegarTodosLembretes = async (req, res) => {
    const lembretes = await lembrete.findAll()
    res.json(lembretes)
};

exports.criarLembrete = async (req, res) => {
  const {titulo, descricao, datal} = req.body
  await lembrete.create({titulo, descricao, datal})
  res.send('Lembrete criado com sucesso')
};

exports.deletarLembrete = async (req, res) => {
  const {id} = req.body;
  await lembrete.destroy({id})
  res.send('Lembrete excluido com sucesso')
};