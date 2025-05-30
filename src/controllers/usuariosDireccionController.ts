import { Request, Response } from 'express';
import * as usuariosDireccionService from '../services/usuariosDireccionService';

export async function getAllUsuariosDireccion(req: Request, res: Response) {
  try {
    const usuariosDirecciones = await usuariosDireccionService.findAllUsuariosDireccion();
    res.json(usuariosDirecciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios-direcciones', error });
  }
}

export async function getUsuariosDireccionById(req: Request, res: Response) {
  try {
    const usuarioId = Number(req.params.usuarioId);
    const direccionId = Number(req.params.direccionId);
    const registro = await usuariosDireccionService.findUsuariosDireccionById(usuarioId, direccionId);
    if (!registro) {
      res.status(404).json({ message: 'Registro no encontrado' });
      return;
    }
    res.json(registro);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener registro', error });
  }
}

export async function createUsuariosDireccion(req: Request, res: Response) {
  try {
    const data = req.body;
    const registroCreado = await usuariosDireccionService.saveUsuariosDireccion(data);
    res.status(201).json(registroCreado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear registro', error });
  }
}

export async function updateUsuariosDireccion(req: Request, res: Response) {
  try {
    const usuarioId = Number(req.params.usuarioId);
    const direccionId = Number(req.params.direccionId);
    const data = req.body;
    const registroActualizado = await usuariosDireccionService.updateUsuariosDireccion(usuarioId, direccionId, data);
    res.json(registroActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar registro', error });
  }
}

export async function deleteUsuariosDireccion(req: Request, res: Response) {
  try {
    const usuarioId = Number(req.params.usuarioId);
    const direccionId = Number(req.params.direccionId);
    const registroEliminado = await usuariosDireccionService.deleteUsuariosDireccion(usuarioId, direccionId);
    res.json({ message: 'Registro eliminado', registroEliminado });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar registro', error });
  }
}
