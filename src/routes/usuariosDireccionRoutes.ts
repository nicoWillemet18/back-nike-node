import { Router } from 'express';
import * as usuariosDireccionController from '../controllers/usuariosDireccionController';

const router = Router();

router.get('/', usuariosDireccionController.getAllUsuariosDireccion);
router.get('/:usuarioId/:direccionId', usuariosDireccionController.getUsuariosDireccionById);
router.post('/', usuariosDireccionController.createUsuariosDireccion);
router.put('/:usuarioId/:direccionId', usuariosDireccionController.updateUsuariosDireccion);
router.delete('/:usuarioId/:direccionId', usuariosDireccionController.deleteUsuariosDireccion);

export default router;
