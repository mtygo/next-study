import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function fetchSomeData(req: NextApiRequest, res: NextApiResponse) {
  const data = await prisma.category.findMany()
  res.status(200).json({ code: 200, data })
}