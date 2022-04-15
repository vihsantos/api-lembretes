const lembrete = (sequelize, DataTypes) => {
    const Lembrete = sequelize.define(
        'Lembrete',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            titulo: {
                type: DataTypes.STRING
            },
            descricao: {
                type: DataTypes.STRING
            },
            datal: {
                type: DataTypes.DATE
            },
            favorito:{
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {   tableName: 'lembretes',
            timestamps: false
        }, 
    )
    return Lembrete
}

module.exports = lembrete;