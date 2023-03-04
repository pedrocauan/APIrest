import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        /* faz as validações dos campos */
        validate: {
          len: {
            // quantidade de caracteres que deve ter o nome
            args: [3, 255],
            // mensagem de erro
            msg: 'Campo nome deve ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },

        /* faz as validações dos campos */
        validate: {
          isEmail: {
            msg: 'Email inválido !!',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        /* faz as validações dos campos */
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      }, /* Campo que nao vai exsitir na base de dados */
    }, {
      sequelize,
    });

    // transforma a senha digitada no formulário em um hash
    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
