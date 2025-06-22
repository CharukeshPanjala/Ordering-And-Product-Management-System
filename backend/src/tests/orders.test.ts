import request from 'supertest';
import app from '../index'; // Adjust path as needed

describe('Order API', () => {
  let createdProductId: number;
  let createdOrderId: number;

  beforeAll(async () => {
    // Create a product to use in orders
    const product = {
      name: 'Test Product for Order',
      description: 'Order product',
      price: 10.0,
      stock: 100
    };
    const res = await request(app).post('/products').send(product);
    createdProductId = res.body.id;
  });

  it('should create a new order (POST /orders)', async () => {
    const orderData = {
      status: 'New',
      orderItems: [
        {
          productId: createdProductId,
          quantity: 2,
          priceAtOrder: 10.0
        }
      ]
    };
    const res = await request(app).post('/orders').send(orderData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.status).toBe('New');
    expect(res.body.orderItems.length).toBe(1);
    createdOrderId = res.body.id;
  });

  it('should get all orders (GET /orders)', async () => {
    const res = await request(app).get('/orders');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should update an order (PUT /orders/:id)', async () => {
    const updatedStatus = 'Completed';
    const res = await request(app)
      .put(`/orders/${createdOrderId}`)
      .send({ status: updatedStatus });
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe(updatedStatus);
  });

  it('should delete an order (DELETE /orders/:id)', async () => {
    const res = await request(app).delete(`/orders/${createdOrderId}`);
    expect(res.statusCode).toEqual(200);
  });
});
