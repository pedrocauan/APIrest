"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Multer é a lib que faz o upload de arquivos no node
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
// extname  pega a extensão do arquivo enviado
var _path = require('path');

// aleatorio  pra caso o arquivo seja enviado no  mesmo milisegundo p  evitar duplicidade
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('O arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    /* lugar que vai ser salvo o arquivo */
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images')); /* 1p-> erro , 2--> pasta que vai ser jogada o arquivo */
    },
    /* nome do arquivo */
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`); /* 1p-> erro , 2--> nome do arquivo */
    },
  }),
};

/**
 *  - para que toda a imagem enviada tenha um nome diferente
 *    é necessário usar  o Date.now() pra que o nome do arquivo seja sempre diferente
 *
 *  - Porém, é possível ter uma foto enviada no mesmo milisegundo, entao
 *    foi criada uma função que gera um aleatorio que vai ser anexado no final do arquivo
 *
 *  - por fim, utiliza-se a função extname para adicionar a extensao do arquivo no final do nome
 */
