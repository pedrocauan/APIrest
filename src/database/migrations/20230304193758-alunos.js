/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // TABELA
    await queryInterface.createTable('alunos', {
      // ID
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      // NOME
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      // SOBRENOME
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      // EMAIL
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      // IDADE
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      // PESO
      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      // ALTURA
      altura: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
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
    await queryInterface.dropTable('alunos');
  },
};
