import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING(191),
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo não pode estar vazio',
          },
        },
      },

      filename: {
        type: Sequelize.STRING(191),
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo não pode estar vazio',
          },
        },
      },

      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
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
