import multer from 'multer';
import multerConfig from '../config/multer';

// single faz com que só possa ser upada uma foto
const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, (error) => {
      // se tiver erro no upload ele da erro
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new FotoController();
