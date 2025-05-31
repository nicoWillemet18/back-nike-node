import { PrismaClient } from '../../generated/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET ?? 'secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;


interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export async function register({ email, password, name }: RegisterRequest) {
  const existingUser = await prisma.usuario.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('Usuario ya existe');
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const newUser = await prisma.usuario.create({
    data: {
      email,
      password: hashedPassword,
      name,
      rol: 'CLIENT',
      usuario: email.split('@')[0],
    },
  });

  const { password: _, ...userWithoutPass } = newUser;
  return userWithoutPass;
}


export async function login({ email, password }: LoginRequest) {
  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }

  const validPassword = await bcrypt.compare(password, usuario.password);
  if (!validPassword) {
    throw new Error('Contraseña incorrecta');
  }

  const token = await jwt.sign(
    { id: usuario.id, email: usuario.email },
    JWT_SECRET,
    { expiresIn: parseInt(JWT_EXPIRES_IN) * 60 }
  );
  const { password: _, ...userWithoutPass } = usuario;

  return { token, usuario: userWithoutPass };
}
