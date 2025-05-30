import { PrismaClient, Type } from '../../generated/prisma';

const prisma = new PrismaClient();

export async function getAllTypes(): Promise<Type[]> {
  return prisma.type.findMany();
}

export async function getTypeById(id: number): Promise<Type | null> {
  return prisma.type.findUnique({ where: { id } });
}

export async function createType(data: Omit<Type, 'id' | 'createdAt' | 'updatedAt'>): Promise<Type> {
  return prisma.type.create({ data });
}

export async function updateType(id: number, data: Partial<Omit<Type, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Type> {
  return prisma.type.update({
    where: { id },
    data,
  });
}

export async function deleteType(id: number): Promise<Type> {
  return prisma.type.delete({ where: { id } });
}
