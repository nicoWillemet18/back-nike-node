import { Request, Response } from 'express';
import * as authService from '../services/authService';

export async function register(req: Request, res: Response) {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { token, usuario } = await authService.login(req.body);
    res.json({ token, usuario });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
}
