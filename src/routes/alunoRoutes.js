// === ROTAS DA HOME ===

import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.put('/:id', alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', alunoController.delete);

export default router;
