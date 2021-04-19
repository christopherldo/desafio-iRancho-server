'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('animal', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_id_pessoa: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_fazenda: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      no_animal: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      no_raca: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      sexo: {
        allowNull: false,
        type: Sequelize.STRING(1)
      },
      vr_peso: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      dt_nascimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('animal');
  }
};