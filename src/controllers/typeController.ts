import { Request, Response } from 'express';
import * as typeService from '../services/typeService';

export async function getAllTypes(req: Request, res: Response) {
  try {
    const types = await typeService.getAllTypes();
    res.json(types);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tipos', error });
  }
}

export async function getTypeById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const type = await typeService.getTypeById(id);
    if (!type) {
      res.status(404).json({ message: 'Tipo no encontrado' });
      return;
    }
    res.json(type);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tipo', error });
  }
}

export async function createType(req: Request, res: Response) {
  try {
    const data = req.body;
    const typeCreado = await typeService.createType(data);
    res.status(201).json(typeCreado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear tipo', error });
  }
}

export async function updateType(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const typeActualizado = await typeService.updateType(id, data);
    res.json(typeActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar tipo', error });
  }
}

export async function deleteType(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const typeEliminado = await typeService.deleteType(id);
    res.json({ message: 'Tipo eliminado', typeEliminado });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar tipo', error });
  }
}
