"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  // CREATE
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);

      // pega o erro e devolve em json
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // LISTA TODOOS OS USUARIOS
  async index(req, res) {
    try {
      // Pega todos os usuarios
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // READ
  async show(req, res) {
    try {
      // pega um usuario
      const user = await _User2.default.findByPk(req.params.id);

      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      // ve se o id foi enviado
      // if (!req.params.id) {
      //   return res.status(400).json({
      //     errors: ['ID não enviado'],
      //   });
      // }

      // pega um usuario
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe !!'],
        });
      }
      // altera os dados na data base
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      // if (!req.params.id) {
      //   return res.status(400).json({
      //     errors: ['ID não enviado'],
      //   });
      // }

      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe !!'],
        });
      }
      // deleta o registro da database
      await user.destroy();
      return res.json(null);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
