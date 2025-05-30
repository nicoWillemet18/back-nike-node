import { PrismaClient, UsuariosDireccion } from '../../generated/prisma';

const prisma = new PrismaClient();

export async function findAllUsuariosDireccion(): Promise<UsuariosDireccion[]> {
  return prisma.usuariosDireccion.findMany();
}

export async function findUsuariosDireccionById(usuarioId: number, direccionId: number): Promise<UsuariosDireccion | null> {
  return prisma.usuariosDireccion.findUnique({
    where: {
      usuarioId_direccionId: {
        usuarioId,
        direccionId,
      }
    }
  });
}

export async function findByUsuarioId(usuarioId: number): Promise<UsuariosDireccion[]> {
  return prisma.usuariosDireccion.findMany({
    where: {
      usuarioId,
    }
  });
}

export async function saveUsuariosDireccion(data: { usuarioId: number; direccionId: number }): Promise<UsuariosDireccion> {
  return prisma.usuariosDireccion.create({ data });
}

export async function updateUsuariosDireccion(
  usuarioId: number,
  direccionId: number,
  data: Partial<Omit<UsuariosDireccion, 'usuarioId' | 'direccionId'>>
): Promise<UsuariosDireccion> {
  return prisma.usuariosDireccion.update({
    where: {
      usuarioId_direccionId: {
        usuarioId,
        direccionId,
      }
    },
    data,
  });
}

export async function deleteUsuariosDireccion(usuarioId: number, direccionId: number): Promise<UsuariosDireccion> {
  return prisma.usuariosDireccion.delete({
    where: {
      usuarioId_direccionId: {
        usuarioId,
        direccionId,
      }
    }
  });
}
