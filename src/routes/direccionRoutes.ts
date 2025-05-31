import { Router } from 'express';
import * as direccionController from '../controllers/direccionController';
import { authenticateJWT } from '../../middlewares/jwtMiddleware';

const router = Router();

router.get('/', direccionController.getAllDirecciones);
router.get('/:id', direccionController.getDireccionById);
router.post('/', authenticateJWT, direccionController.createDireccion);
router.put('/:id', authenticateJWT, direccionController.updateDireccion);
router.delete('/:id', authenticateJWT, direccionController.deleteDireccion);

export default router;
