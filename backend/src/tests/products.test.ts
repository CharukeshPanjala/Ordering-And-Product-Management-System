import request from 'supertest';
import app from '../index'; // Import your Express app

describe('Product API', () => {
  it('should return all products (GET /products)', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new product (POST /products)', async () => {
    const product = {
      name: 'Test Product',
      description: 'A sample product',
      price: 9.99,
      stock: 20
    };
    const res = await request(app).post('/products').send(product);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(product.name);
  });
});

describe('Product API', () => {
  it('should return all products (GET /products)', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new product (POST /products)', async () => {
    const product = {
      name: 'Test Product',
      description: 'A sample product',
      price: 9.99,
      stock: 20
    };
    const res = await request(app).post('/products').send(product);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(product.name);
  });
});


describe('Product API', () => {
  it('should return all products (GET /products)', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new product (POST /products)', async () => {
    const product = {
      name: 'Test Product',
      description: 'A sample product',
      price: 9.99,
      stock: 20
    };
    const res = await request(app).post('/products').send(product);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(product.name);
  });
});


describe('Product API', () => {
  it('should return all products (GET /products)', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new product (POST /products)', async () => {
    const product = {
      name: 'Test Product',
      description: 'A sample product',
      price: 9.99,
      stock: 20
    };
    const res = await request(app).post('/products').send(product);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(product.name);
  });
});


describe('Product API', () => {
  it('should return all products (GET /products)', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new product (POST /products)', async () => {
    const product = {
      name: 'Test Product',
      description: 'A sample product',
      price: 9.99,
      stock: 20
    };
    const res = await request(app).post('/products').send(product);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(product.name);
  });
});


describe('Product API', () => {
  it('should return all products (GET /products)', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new product (POST /products)', async () => {
    const product = {
      name: 'Test Product',
      description: 'A sample product',
      price: 9.99,
      stock: 20
    };
    const res = await request(app).post('/products').send(product);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(product.name);
  });
});


describe('Product API', () => {
  it('should return all products (GET /products)', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new product (POST /products)', async () => {
    const product = {
      name: 'Test Product',
      description: 'A sample product',
      price: 9.99,
      stock: 20
    };
    const res = await request(app).post('/products').send(product);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(product.name);
  });
});


describe('Product API', () => {
  it('should return all products (GET /products)', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new product (POST /products)', async () => {
    const product = {
      name: 'Test Product',
      description: 'A sample product',
      price: 9.99,
      stock: 20
    };
    const res = await request(app).post('/products').send(product);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(product.name);
  });
});