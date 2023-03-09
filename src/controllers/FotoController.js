import multer from 'multer';
import multerConfig from '../config/multer';
import Foto from '../models/Foto';

// single faz com que só possa ser upada uma foto
const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      // se tiver erro no upload ele da erro
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        // pega o nome da foto  na requisição
        const { originalname, filename } = req.file;
        // pega o id do aluno na requisição
        const { aluno_id } = req.body;
        // salva foto na database
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
