// === ROTAS DE FOTO ===

import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);

const router = new Router();

// single faz com que só possa ser upada uma foto
router.post('/', upload.single('foto'), fotoController.store);

export default router;
