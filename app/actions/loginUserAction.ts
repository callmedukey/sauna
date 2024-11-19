'use server';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; // Use bcrypt para verificar senhas

const prisma = new PrismaClient();

export async function loginUserAction(data: { email: string; password: string }) {
  try {
    // Verifique se o usuário existe no banco de dados
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return { success: false, error: 'User not found' };
    }

    // Verifique a senha
    const isPasswordValid = await bcrypt.compare(data.password, user.password); // Senha deve estar previamente hashada no registro

    if (!isPasswordValid) {
      return { success: false, error: 'Invalid credentials' };
    }

    // Retorne o usuário autenticado (evite retornar informações sensíveis)
    return { success: true, user: { id: user.id, email: user.email } };
  } catch (error) {
    console.error('Error logging in user:', error);
    return { success: false, error: 'Failed to log in user' };
  }
}
