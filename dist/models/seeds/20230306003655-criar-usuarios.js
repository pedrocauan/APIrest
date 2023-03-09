"use strict";// insere dados automaticamente no banco
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    try {
      await queryInterface.bulkInsert(
        'users',
        [
          {
            nome: 'carlos',
            email: 'carlin@gmail.com',
            password_hash: await bcryptjs.hash('1234567', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },

          {
            nome: 'carlos 2',
            email: 'carlin2@gmail.com',
            password_hash: await bcryptjs.hash('7654321', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },

          {
            nome: 'carlos 3',
            email: 'carlin3@gmail.com',
            password_hash: await bcryptjs.hash('abcdefg', 8),
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
