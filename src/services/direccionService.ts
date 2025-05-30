import { PrismaClient, Direccion } from '../../generated/prisma';

const prisma = new PrismaClient();

export async function getAllDirecciones(): Promise<Direccion[]> {
  return prisma.direccion.findMany();
}

export async function getDireccionById(id: number): Promise<Direccion | null> {
  return prisma.direccion.findUnique({ where: { id } });
}

export async function createDireccion(data: Omit<Direccion, 'id' | 'createdAt' | 'updatedAt'>): Promise<Direccion> {
  return prisma.direccion.create({ data });
}

export async function updateDireccion(id: number, data: Partial<Omit<Direccion, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Direccion> {
  return prisma.direccion.update({
    where: { id },
    data,
  });
}

export async function deleteDireccion(id: number): Promise<Direccion> {
  return prisma.direccion.delete({ where: { id } });
}
