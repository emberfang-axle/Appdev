# 📚 Bookstore Mobile App
Christel Grace c. Apas 


A cloud-connected mobile app built with **React Native + Expo** and a backend powered by **Node.js + Express** with a **MySQL database hosted on Railway**. This project is for my **Midterm, Pre-Final, and Final Exam** in Android Development.

---

## 📌 Features

- ✅ User registration and login (authentication)
- ✅ Book listings with author information
- ✅ Add books to order (cart)
- ✅ Place orders and view order history
- ✅ Responsive UI using React Native components
- ✅ API communication via HTTP using Axios
- ✅ Cloud-based MySQL storage

---

## 🛠 Tech Stack

### 📱 Frontend (Mobile App)
- React Native (with Expo)
- React Navigation
- Axios
- React Native Paper (Material UI)
- AsyncStorage (for login token)

### 🌐 Backend (REST API)
- Node.js
- Express.js
- MySQL2
- Railway (MySQL cloud hosting)
- CORS and dotenv

---

## 🗂 ER Diagram Overview

- **Users**: Login, Register
- **Authors**: Book authors and bios
- **Books**: Title, price, genre, author_id
- **Orders**: User’s orders with total and date
- **Order Items**: Books inside an order

---

## 🚀 Setup Instructions

### 1️⃣ Clone This Repo

```bash
git clone https://github.com/emberfang-axle/bookstore-app.git
cd bookstore-app
