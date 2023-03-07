// Multer é a lib que faz o upload de arquivos no node
import multer from 'multer';
// extname  pega a extensão do arquivo enviado
import { extname, resolve } from 'path';

// aleatorio  pra caso o arquivo seja enviado no  mesmo milisegundo p  evitar duplicidade
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    /* lugar que vai ser salvo o arquivo */
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads')); /* 1p-> erro , 2--> pasta que vai ser jogada o arquivo */
    },
    /* nome do arquivo */
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); /* 1p-> erro , 2--> nome do arquivo */
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
