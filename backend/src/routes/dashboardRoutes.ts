import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const totalProducts = await prisma.product.count();
    const totalOrders = await prisma.order.count();
    const totalRevenue = await prisma.orderItem.aggregate({
      _sum: { priceAtOrder: true }
    });

    const productDemand = await prisma.orderItem.groupBy({
      by: ['productId'],
      _sum: { quantity: true },
      orderBy: { _sum: { quantity: 'desc' } },
      take: 5,
    });

    res.json({
      totalProducts,
      totalOrders,
      totalRevenue: totalRevenue._sum.priceAtOrder || 0,
      productDemand
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get dashboard stats' });
  }
});


router.get('/alerts/low-stock', async (req, res) => {
  // Define a threshold for low stock, will update the logic in logic later
  // For now, let's assume a threshold of 5 for low stock products
  const threshold = 5;
  try {
    const lowStockProducts = await prisma.product.findMany({
      where: {
        stock: { lt: threshold },
        isActive: true
      }
    });
    res.json(lowStockProducts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch low stock products' });
  }
});

export default router;