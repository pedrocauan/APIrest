"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

// single faz com que só possa ser upada uma foto
const upload = _multer2.default.call(void 0, _multer4.default).single('foto');

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
        const foto = await _Foto2.default.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

exports. default = new FotoController();
