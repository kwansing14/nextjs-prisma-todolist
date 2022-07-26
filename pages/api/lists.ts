// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type Data = {
  name: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const listsData = JSON.parse(req.body);
  const savedLists = await prisma.list.create({
    data: listsData,
  });
  console.log(savedLists);
  res.json(savedLists);
}
