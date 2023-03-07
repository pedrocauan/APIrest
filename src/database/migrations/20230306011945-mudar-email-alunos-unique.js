/*= == Essa migration altera o valor do campo email no banco de dados === */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // edita uma coluna que já existe
    await queryInterface.changeColumn(
      'alunos', // 1p -> nome da tabela
      'email', // 2p -> nome da coluna
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  async down() { },
};
