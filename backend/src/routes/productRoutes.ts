import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

router.post('/', async (req, res) => {
  const { name, description, price, stock } = req.body;
  const product = await prisma.product.create({
    data: { name, description, price, stock }
  });
  res.json(product);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: { name, description, price, stock }
  });
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.product.delete({
    where: { id: Number(id) }
  });
  res.json({ message: 'Product deleted successfully' });
});

export default router;
