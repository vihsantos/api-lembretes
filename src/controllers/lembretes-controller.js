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
    db.query('SELECT * FROM lembretes WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
};
exports.criarLembrete = (req, res) => {
//
};