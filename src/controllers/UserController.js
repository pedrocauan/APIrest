import User from '../models/User';

class UserController {
  // CREATE
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
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
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // READ
  async show(req, res) {
    try {
      // pega um usuario
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      // ve se o id foi enviado
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      // pega um usuario
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe !!'],
        });
      }
      // altera os dados na data base
      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
