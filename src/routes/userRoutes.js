// === ROTAS DE USER ===

import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// nao deveria existir
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

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
