import { Router } from 'express';
import * as typeController from '../controllers/typeController';

const router = Router();

router.get('/', typeController.getAllTypes);
router.get('/:id', typeController.getTypeById);
router.post('/', typeController.createType);
router.put('/:id', typeController.updateType);
router.delete('/:id', typeController.deleteType);

export default router;
