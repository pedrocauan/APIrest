import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Paulo Sérgio',
      sobrenome: 'Batista Filho',
      email: 'pa_sergio07@hotmail.com',
      idade: 19,
      peso: 80.34,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
