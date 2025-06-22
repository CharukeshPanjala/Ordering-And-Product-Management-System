import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
 const orders = await prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    });
  res.json(orders);
});

router.post('/', async (req, res) => {
  const { orderItems, status } = req.body;

  try {
    const order = await prisma.order.create({
      data: {
        status,
        orderItems: {
          create: orderItems.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            priceAtOrder: item.priceAtOrder
          }))
        }
      },
      include: { orderItems: true }
    });

    res.json(order);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create order' });
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { status, orderItems } = req.body;

  try {
    await prisma.order.update({
      where: { id: Number(id) },
      data: { status }
    });

    if (orderItems) {
      await prisma.orderItem.deleteMany({
        where: { orderId: Number(id) }
      });

      await prisma.orderItem.createMany({
        data: orderItems.map((item: any) => ({
          orderId: Number(id),
          productId: item.productId,
          quantity: item.quantity,
          priceAtOrder: item.priceAtOrder
        }))
      });
    }

    const updatedOrder = await prisma.order.findUnique({
      where: { id: Number(id) },
      include: {
        orderItems: {
          include: { product: true }
        }
      }
    });

    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update order' });
  }
});



router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.orderItem.deleteMany({
      where: { orderId: Number(id) }
    });

    await prisma.order.delete({
      where: { id: Number(id) }
    });

    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Order not found or already deleted' });
  }
});


export default router;
