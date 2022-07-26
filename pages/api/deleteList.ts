// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Console } from 'console';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body);
  console.log('data.value', data);

  const deletedList = await prisma.list.delete({
    where: {
      id: data,
    },
  });

  res.status(200).json(deletedList);
}
