const sequelize = require('../sequelize')
const Sequelize = require('sequelize')

const Lembrete = require('./Lembrete')

const lembrete = Lembrete(sequelize, Sequelize.DataTypes)

const datab = {
    lembrete,
    sequelize
}

module.exports = datab