'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pessoa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_pessoa: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      no_email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(64),
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sexo: {
        allowNull: false,
        type: Sequelize.STRING(1),
      },
      ic_ativo: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.BOOLEAN,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pessoa');
  },
};