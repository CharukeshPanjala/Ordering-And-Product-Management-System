import axios from 'axios';

const API = "http://localhost:3000"; // Make sure port matches your backend

// Product APIs
export const getProducts = () => axios.get<any[]>(`${API}/products`)
export const addProduct = (data: any) => axios.post(`${API}/products`, data);
export const updateProduct = (id: string, data: any) => axios.put(`${API}/products/${id}`, data);
export const deleteProduct = (id: string) => axios.delete(`${API}/products/${id}`);

// Order APIs
export const getOrders = () => axios.get<any[]>(`${API}/orders`)
export const addOrder = (data: any) => axios.post(`${API}/orders`, data);
export const updateOrder = (id: string, data: any) => axios.put(`${API}/orders/${id}`, data);
export const deleteOrder = (id: string, data: any) => axios.delete(`${API}/orders/${id}`, data);

// Dashboard API
export const getDashboard = () => axios.get(`${API}/`);