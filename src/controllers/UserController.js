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
}

export default new UserController();
