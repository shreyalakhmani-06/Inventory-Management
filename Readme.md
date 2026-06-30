# Inventory Management System Backend

## Overview

The Inventory Management System (IMS) Backend is a RESTful API built using Node.js, Express.js, MongoDB, and Mongoose. It provides secure inventory management features including user authentication, product management, pagination, searching, sorting, validation, logging, API documentation, and Docker support.

## Features

### Authentication & Authorization

* User Registration
* User Login
* JWT-based Authentication
* Protected Product Routes

### Product Management

* Create Product
* Get All Products
* Update Product Quantity
* Delete Product

### Advanced Features

* Pagination
* Search Products by Name
* Sort Products by Price or Quantity
* Input Validation using Express Validator
* Global Error Handling
* Request Logging using Morgan

### Documentation & Deployment

* Swagger API Documentation
* Docker Support
* Postman Collection Included

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas / MongoDB
* Mongoose
* JWT (JSON Web Tokens)
* Express Validator
* Morgan
* Swagger UI
* Docker

---

## Project Structure

```text
inventory-management/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── procontroller.js
├── middlewares/
│   ├── authMiddleware.js
│   ├── validators.js
│   └── errorHandler.js
├── models/
│   ├── User.js
│   └── Product.js
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
├── Dockerfile
├── openapi.yaml
├── ims_postman_collection.json
├── test_api.py
├── index.js
├── package.json
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/shreyalakhmani-06/Inventory-Management.git
cd Inventory-Management
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start Server

```bash
npm start
```

Server will run on:

```text
http://localhost:8080
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /register
```

Request Body:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

#### Login User

```http
POST /login
```

Request Body:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt_token"
}
```

---

### Product APIs

All Product APIs require a valid JWT token.

Authorization Header:

```text
Authorization: Bearer <token>
```

---

### Create Product

```http
POST /products
```

Request Body:

```json
{
  "name": "Laptop",
  "price": 50000,
  "quantity": 10
}
```

---

### Get Products

```http
GET /products
```

---

### Pagination

```http
GET /products?page=1&limit=5
```

---

### Search Products

```http
GET /products?search=laptop
```

---

### Sort Products

Ascending:

```http
GET /products?sort=price
```

Descending:

```http
GET /products?sort=-price
```

Sort by Quantity:

```http
GET /products?sort=-quantity
```

---

### Update Product Quantity

```http
PUT /products/:id
```

Request Body:

```json
{
  "quantity": 20
}
```

---

### Delete Product

```http
DELETE /products/:id
```

---

## Swagger Documentation

After running the server:

```text
http://localhost:8080/api-docs
```

Swagger UI provides interactive API testing and documentation.

---

## Docker Usage

### Build Docker Image

```bash
docker build -t inventory-management .
```

### Run Docker Container

```bash
docker run -p 8080:8080 inventory-management
```

---

## Testing

### Postman

Import:

```text
ims_postman_collection.json
```

into Postman and test all APIs.

### Python Test Script

```bash
python test_api.py
```

---

## Error Handling

The project includes a centralized global error handler that returns meaningful API error responses.

Example:

```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

---

## Logging

Morgan middleware is used for request logging.

Example:

```text
GET /products 200 12.5 ms
POST /login 200 150.3 ms
```

---

## Future Improvements

* Password Hashing using Bcrypt
* Role-Based Access Control
* Product Categories
* Inventory Analytics Dashboard
* Unit & Integration Testing
* CI/CD Pipeline

---

## Author

Shreya Lakhmani

GitHub:
https://github.com/shreyalakhmani-06

Project Link:
https://inventory-management-14u7.onrender.com/api-docs/

---

## License

This project is developed for learning and educational purposes.
