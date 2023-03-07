import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {

  }

  async update(req, res) {

  }

  // Mostra aluno na database
  async show(req, res) {
    try {
      // ve se foi enviado o id do aluno na requisição
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      // ve se o aluno existe na database
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      // devolve o aluno buscado
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });

        const aluno = await Aluno.findByPk(id);
        if (!aluno) {
          return res.status(400).json({
            errors: ['Aluno não existe'],
          });
        }

        await aluno.destroy();
        // retorna um bool informando se o aluno foi ou nao apagado
        return res.json({
          apagado: true,
        });
      }
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();