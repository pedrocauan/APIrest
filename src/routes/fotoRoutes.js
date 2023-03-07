// === ROTAS DE FOTO ===

import { Router } from 'express';

import fotoController from '../controllers/FotoController';

const router = new Router();

// single faz com que só possa ser upada uma foto
router.post('/', fotoController.store);

export default router;
