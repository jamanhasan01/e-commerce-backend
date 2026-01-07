# 📘 E-Commerce Backend API

A RESTful API built with **Node.js, Express, TypeScript, MongoDB (Mongoose)** following **MVC + Service architecture**.

---

## 🧱 Tech Stack
- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- bcrypt
- JWT (coming soon)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/e-commerce-backend.git
cd e-commerce-backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
```

### 4️⃣ Run the server
```bash
npm run dev
```

Server will run on:
```
http://localhost:5000
```

---

## 🔐 Authentication APIs

### ✅ Register User

**Endpoint**
```
POST /api/auth/register
```

**Description**  
Creates a new user account.

---

### 📥 Request Body
```json
{
  "name": "Jaman",
  "email": "jaman@gmail.com",
  "password": "123456"
}
```

---

### 📤 Success Response (201)
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "65a1f8c2b23f9e1234567890",
    "name": "Jaman",
    "email": "jaman@gmail.com",
    "role": "customer"
  }
}
```

---

### ❌ Error Responses

#### 400 – Validation Error
```json
{
  "success": false,
  "message": "Please provide all required fields (name, email, password)."
}
```

#### 409 – Email Already Exists
```json
{
  "success": false,
  "message": "A user with this email already exists."
}
```

---

## 📌 Project Structure
```
src/
 ├── controllers/
 ├── services/
 ├── models/
 ├── routes/
 └── app.ts
```

---

## 🛣️ Roadmap
- [x] User Registration
- [ ] User Login
- [ ] JWT Authentication
- [ ] Role-based Authorization
- [ ] Product Module
- [ ] Order Module

---

## 👨‍💻 Author
**Jaman**  
Full-Stack Web Developer (MERN)

---

## ⭐ Notes
- Passwords are hashed using bcrypt
- Sensitive data is never returned
- Follow clean architecture principles
