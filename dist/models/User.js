"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      /* Campo que nao vai exsitir na base de dados */
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        /* faz as validações dos campos */
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    // transforma a senha digitada no formulário em um hash
    this.addHook('beforeSave', async (user) => {
      // evita conflitos caso a senha nao seja passada no update
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  // compara a senha com o hash pra descobrir que a senha existe na database
  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
