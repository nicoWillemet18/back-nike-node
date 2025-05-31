import { Router } from 'express';
import * as usuariosDireccionController from '../controllers/usuariosDireccionController';
import { authenticateJWT } from '../../middlewares/jwtMiddleware';

const router = Router();

router.get('/', usuariosDireccionController.getAllUsuariosDireccion);
router.get('/:usuarioId/:direccionId', authenticateJWT, usuariosDireccionController.getUsuariosDireccionById);
router.post('/', authenticateJWT, usuariosDireccionController.createUsuariosDireccion);
router.put('/:usuarioId/:direccionId', authenticateJWT, usuariosDireccionController.updateUsuariosDireccion);
router.delete('/:usuarioId/:direccionId', authenticateJWT, usuariosDireccionController.deleteUsuariosDireccion);

export default router;
