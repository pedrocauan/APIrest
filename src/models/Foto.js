import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo não pode estar vazio',
          },
        },
      },

      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo não pode estar vazio',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  // associa a tabela Foto com a tabela Aluno
  static associate(models) {
    // 1p -> a qual tabela pertence, 2p -> foreignkey
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
