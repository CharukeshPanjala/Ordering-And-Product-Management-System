
# 📦 Ordering and Product Management System

A full-stack inventory and order management system built with **React + TypeScript**, **Node.js + Express**, and **PostgreSQL**, designed to streamline product tracking, order processing, and demand analytics for administrative users.

---

## 🚀 Features

- 🛒 **Product Management** – Add, edit, delete, and list products with real-time stock data  
- 📦 **Order Processing** – Create and manage customer orders with status tracking  
- 📊 **Dashboard & Reporting** – Visual insights into product demand and inventory health  
- 🚨 **Inventory Alerts** – Automated low-stock notifications for proactive supply management  
- 📋 **User-Friendly UI** – Clean React interfaces for intuitive admin workflows  
- 🛠️ **Full REST API** – Express backend with Prisma ORM and PostgreSQL  
- 🐳 **Dockerized Deployment** – Containerized frontend, backend, and database for portability  
- 📈 **Logging & Monitoring** – Integrated log aggregation with **Grafana + Loki + Promtail**

---

## ⚙️ Tech Stack

- **Frontend**: React.js + TypeScript  
- **Backend**: Node.js + Express + TypeScript  
- **Database**: PostgreSQL  
- **ORM**: Prisma  
- **Containerization**: Docker, Docker Compose  
- **Monitoring**: Grafana, Loki, Promtail  
- **DevOps**: Environment configuration via `.env`, logging with Morgan & Winston

---

## 📁 Structure

```
/frontend     → React + TypeScript client  
/backend      → Express + Prisma server  
/prisma       → Database schema & migrations  
/docker       → Docker & Compose setup  
/docs         → SRS, Tech Spec, Test Plans, Maintenance
```

---

## 🛠️ Getting Started

```bash
git clone https://github.com/CharukeshPanjala/Ordering-And-Product-Management-System
cd Ordering-And-Product-Management-System
docker-compose up --build
```

---
