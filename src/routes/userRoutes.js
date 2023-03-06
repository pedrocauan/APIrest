// === ROTAS DA HOME ===

import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// nao deveria existir
router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 *  TOKEN
 *  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYUBnbWFpbC5jb20iLCJpYXQiOjE2NzgwNDg1MTIsImV4cCI6MTY3ODY1MzMxMn0.aMyZXV9r5ByBatE2DO-qpjzoZ2_6aeaheugcTxQ__ME
 */

/**
 * ===== METODOS API REST ====
 * index -> Lista todos os usuarios -> GET
 * store/create -> Cria um novo usuario -> POST
 * delete -> apaga um usuario -> DELETE
 * show -> mostra um usuario -> GET
 * update -> atualiza um usuario -> PATCH ou PUT
 *
 */
