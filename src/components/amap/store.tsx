'use server';

import prisma from '@/app/prisma';

export const addTodo = async (data: { name: string; age: number }) => {
  await prisma.user.create({
    data: data,
  });
};

export const deploy = async (id: any) => {
  try {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {}
};

export const getTodo = async () => {
  const data = await prisma.user.findMany();
  return data;
};
