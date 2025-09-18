const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const AutorModel = sequelize.define('Autor', {

    cod_autor: {
        type: DataTypes.STRING(4),
        allowNull: false,
        primaryKey: true,
        validate: {
            is: {
                args: /^[A-Z]\d{3}$/,
                msg: 'O código da turma deve ter a primeira letra Maiúscula seguida de 3 digitos númericos'
            }
        }
    },
    nome_autor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    titulo_livro: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    genero: {
    type: DataTypes.ENUM(
      'Romance',
      'Ficção',
      'Fantasia',
      'Terror',
      'Suspense',
      'Biografia',
      'História',
      'Ciência'
    ),
    allowNull: false,
    defaultValue: 'Romance', // gênero padrão caso não informe
    },
    ano_publicacao: {
    type: DataTypes.INTEGER,
    allowNull: true,
    }
    },
    {
        tableName: 'autor',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    },

)

module.exports = AutorModel;



