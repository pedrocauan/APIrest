"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // TABELA
    await queryInterface.createTable('fotos', {
      // ID
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      // NOME
      originalname: {
        type: Sequelize.STRING(191),
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING(191),
        allowNull: false,
      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // cria chave estrangeira no model de alunos
        references: {
          model: 'alunos', /* tabela no db */
          key: 'id',
        },

        onDelete: 'SET NULL',
        onUpdate: 'CASCADE', // CASCADE -> se o pai for alterado, o filho também vai ser
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example: */
    await queryInterface.dropTable('fotos');
  },
};
