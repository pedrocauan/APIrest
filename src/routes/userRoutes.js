// === ROTAS DA HOME ===

import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

// CREATE
router.post('/', userController.store);

router.get('/', userController.index);

router.get('/:id', userController.show);
router.put('/:id', userController.update);

export default router;

/**
 * ===== METODOS API REST ====
 * index -> Lista todos os usuarios -> GET
 * store/create -> Cria um novo usuario -> POST
 * delete -> apaga um usuario -> DELETE
 * show -> mostra um usuario -> GET
 * update -> atualiza um usuario -> PATCH ou PUT
 *
 */
