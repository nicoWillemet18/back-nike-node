import { Router } from 'express';
import * as direccionController from '../controllers/direccionController';

const router = Router();

router.get('/', direccionController.getAllDirecciones);
router.get('/:id', direccionController.getDireccionById);
router.post('/', direccionController.createDireccion);
router.put('/:id', direccionController.updateDireccion);
router.delete('/:id', direccionController.deleteDireccion);

export default router;
