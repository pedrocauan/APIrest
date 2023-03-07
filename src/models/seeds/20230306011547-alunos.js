// insere dados automaticamente no banco
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    try {
      await queryInterface.bulkInsert(
        'alunos',
        [
          {
            nome: 'carlos',
            sobrenome: 'miranda',
            email: 'carlin@gmail.com',
            idade: 23,
            peso: 72.9,
            altura: 1.82,
            created_at: new Date(),
            updated_at: new Date(),
          },

        ],

        {},
      );
    } catch (e) {
      console.log(e);
    }
  },

  async down() {

  },
};
