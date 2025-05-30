import { Request, Response } from 'express';
import * as direccionService from '../services/direccionService';

export async function getAllDirecciones(req: Request, res: Response) {
  try {
    const direcciones = await direccionService.getAllDirecciones();
    res.json(direcciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener direcciones', error });
  }
}

export async function getDireccionById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const direccion = await direccionService.getDireccionById(id);
    if (!direccion) {
      res.status(404).json({ message: 'Dirección no encontrada' });
      return;
    }
    res.json(direccion);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener dirección', error });
  }
}

export async function createDireccion(req: Request, res: Response) {
  try {
    const data = req.body;
    const direccionCreada = await direccionService.createDireccion(data);
    res.status(201).json(direccionCreada);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear dirección', error });
  }
}

export async function updateDireccion(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const direccionActualizada = await direccionService.updateDireccion(id, data);
    res.json(direccionActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar dirección', error });
  }
}

export async function deleteDireccion(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const direccionEliminada = await direccionService.deleteDireccion(id);
    res.json({ message: 'Dirección eliminada', direccionEliminada });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar dirección', error });
  }
}
