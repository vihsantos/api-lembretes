const { lembrete } = require('../models')
const { sequelize, Op} = require('sequelize')

exports.pegarTodosLembretes = async (req, res) => {
    const lembretes = await lembrete.findAll()
    res.json(lembretes)
};

exports.pegarLembrete = async (req, res)=>{
  const {id} = req.params;

  const l = await lembrete.findByPk(id);
  res.json(l)
};

exports.criarLembrete = async (req, res) => {
  const {titulo, descricao, datal} = req.body
  await lembrete.create({titulo, descricao, datal})
  res.send('Lembrete criado com sucesso')
};

exports.deletarLembrete = async (req, res) => {
  const {id} = req.params;
  await lembrete.destroy({
    where: {
      id: 
        id
    }
  })
  res.send('Lembrete excluido com sucesso')
};
