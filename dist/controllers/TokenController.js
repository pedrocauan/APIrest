"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    console.log(req.body.email, req.body.password);

    // verifica se foi enviado email e a senha
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas !!'],
      });
    }

    // procura o usuario na database pelo email
    const user = await _User2.default.findOne({ where: { email } });

    // retorna erro caso nao exista o usuario
    if (!user) {
      return res.status(401).json({
        errors: ['Usuario não existe !!'],
      });
    }

    // verifica se a senha é válida
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida !!'],
      });
    }

    // criação do token -> id + email + token-secreto(chave)
    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION, /* Tempo em que o token vai expirar */
    });

    return res.json({ token });
  }
}

exports. default = new TokenController();
