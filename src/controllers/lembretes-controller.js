const db = require('../db').pool;

exports.pegarTodosLembretes = (req, res) => {
    db.query('SELECT * FROM lembretes', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
};
exports.pegarLembrete = (req, res) => {
    const id = parseInt(req.params.id)
    db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
};
exports.criarLembrete = (req, res) => {
    const {id, titulo, descricao, datal} = req.body;
    db.query('INSERT into lembretes (id, titulo, descricao, datal) values ($1, $2, $3, $4)', [id, titulo, descricao, datal], (error, results) => {
        if (error) {
          throw error
        }
        res.status(201).send('Lembrete adicionado com sucesso')
      })
};