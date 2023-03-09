import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      /* 1- CAMPO A SER ORDENADO, 2-> DESC (decrescente) ASC(CRESCENTE) */
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      /* insere os dados de outra tabela */
      include: {
        model: Foto,
        attributes: ['filename'],
      },
    });

    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      // pega aluno na db
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      // === aluno com letra MINUSCULA *É O CAMPO QUE FOI RETORNADO NA PESQUISA* ===

      // atualiza o registro  nos campos enviados no corpo da requisição
      const novosDados = await aluno.update(req.body);
      console.log(novosDados);
      /* const {
        nome, sobrenome, email, idade, peso, altura,
      } = novosDados; */
      return res.json(novosDados);
    } catch (e) {
      console.log(typeof e.message);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
      // return res.status(400).json({
      //   errors: e.errors.map((err) => err.message),
      // });
    }
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
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      // devolve o aluno buscado
      return res.json(aluno);
    } catch (e) {
      console.log(e);
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
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json({ apagado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
