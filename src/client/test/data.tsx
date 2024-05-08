'use server';

import prisma from '@/app/prisma';

export const addTodo = async (data: { name: string; time: string }) => {
  await prisma.todo.create({
    data: data,
  });
};

export const deploy = async (id: any) => {
  try {
    await prisma.todo.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {}
};

export const getTodo = async () => {
  const data = await prisma.todo.findMany();
  return data;
};
