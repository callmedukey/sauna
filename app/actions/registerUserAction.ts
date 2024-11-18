'use server';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; // Biblioteca para hashing de senha

const prisma = new PrismaClient();

export async function registerUserAction(data: {
  email: string;
  password: string;
  confirmPassword: string;
}) {
  try {
    // Valida se as senhas coincidem
    if (data.password !== data.confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      return { success: false, error: 'User already exists' };
    }

    // Hash da senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Salva o usuário no banco de dados
    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword, // Salva a senha hashada
      },
    });

    return { success: true, newUser };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, error: 'Failed to register user' };
  }
}
