import { PrismaClient, Producto } from '../../generated/prisma';

const prisma = new PrismaClient();

interface Pagination {
  skip?: number;
  take?: number; 
}

export async function getAllProductos(pagination?: Pagination): Promise<Producto[]> {
  return prisma.producto.findMany({
    skip: pagination?.skip,
    take: pagination?.take,
  });
}

export async function getAllActiveProductos(pagination?: Pagination): Promise<Producto[]> {
  return prisma.producto.findMany(
    {
    where: {
      active: true
    }, 
    skip: pagination?.skip,
    take: pagination?.take,
  });
}

export async function getAllDisabledProductos(pagination?: Pagination): Promise<Producto[]> {
  return prisma.producto.findMany(
    {
    where: {
      active: true
    }, 
    skip: pagination?.skip,
    take: pagination?.take,
  });
}

export async function getProductoById(id: number): Promise<Producto | null> {
  return prisma.producto.findUnique({ where: { id } });
}

export async function createProducto(data: Omit<Producto, 'id' | 'createdAt' | 'updatedAt'>): Promise<Producto> {
  return prisma.producto.create({ data });
}

export async function updateProducto(id: number, data: Partial<Omit<Producto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Producto> {
  return prisma.producto.update({
    where: { id },
    data,
  });
}

export async function deleteProducto(id: number): Promise<Producto> {
  //return prisma.producto.delete({ where: { id } });
  return prisma.producto.update({
    where: { id },
    data: {
      active: false
    }
  });

}


export async function searchProductos(filtro: string, pagination?: Pagination): Promise<Producto[]> {
  return prisma.producto.findMany({
    where: {
      OR: [
        { name: { contains: filtro, mode: 'insensitive' } },
        { descripcion: { contains: filtro, mode: 'insensitive' } },
      ],
    },
    skip: pagination?.skip,
    take: pagination?.take,
  });
}
