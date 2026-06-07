📦 Inventory Management System (IMS) - Backend
A backend REST API for managing inventory in a small business. Built using Node.js, Express, and MongoDB Atlas, with JWT authentication and cookie-based login.

⚙️ Features
✅ User registration and login (JWT, stored in cookies)
✅ Add products
✅ Update product quantity
✅ Get all products with pagination
✅ Authentication middleware
✅ Environment-based config
✅ Python test script (as provided in assignment)
✅ OpenAPI (Swagger) documentation at /api-docs
✅ Docker support for containerized deployment
⚙️ Tech Stack
Backend: Node.js, Express
Database: MongoDB Atlas
Auth: JWT + Cookies
Docs: Swagger (OpenAPI YAML)
Testing: Postman, Python test script
Containerization: Docker
📁 Project Structure
ims-backend/
├── controllers/                   # Logic for auth & product
├── middlewares/                   # JWT auth middleware
├── models/                        # Mongoose schemas
├── index.js                       # Main app with all routes and Server entry point
├── Dockerfile                     # Docker configuration
├── openapi.yaml                   # Swagger API documentation
├── .env                           # Environment variables
├── test_api.py                    # Python test script (assignment)
├── ims_postman_collection.json    # Postman collection
├── README.md
🛠️ Setup Instructions
🔹 Prerequisites
Node.js v14+
MongoDB Atlas account
Python 3.6+ (for testing script)
requests Python module
Docker (optional)
🔹 1. Clone the Repo
git clone https://github.com/ashutosh-3474/Inventory-Management.git
cd Inventory-Management/
🔹 2. Install Dependencies
npm install
🔹 3. Run the Server
npm run dev     # Development mode using nodemon
# OR
npm start       # Production mode
Server will run at: http://localhost:8080

🐳 Docker Setup (Optional)
🔹 1. Build Docker Image
docker build -t ims-backend .
🔹 2. Run the Container
docker run -e PORT=8080 -p 8080:8080 ims-backend
🔐 API Endpoints
All product routes require login (auth cookie).

🔹 Auth
POST /register — Create user
POST /login — Login and set JWT cookie
POST /logout — Clear the auth cookie
🔹 Products (Require Auth)
POST /products — Add a new product
PUT /products/:id/quantity — Update product quantity
GET /products — Get paginated product list
🧪 Testing
🔹 1. Install Python & Requests
pip install requests
🔹 2. Run Test Script
Make sure your server is running at http://localhost:8080

python test_api.py
📤 Postman Collection
Import the included file ims_postman_collection.json into Postman to test all endpoints.

📘 API Documentation (Swagger UI)
Swagger docs available at:

http://localhost:8080/api-docs
The documentation is based on the openapi.yaml file.

🧹 Notes
JWT is stored in cookies (HttpOnly, Secure)
Auth required for all /products/* routes
Token can also be passed via Authorization: Bearer <token> (optional)
AI tools were used to assist in generating the syntax and boilerplate code

👨‍💻 Author
Shreya Lakhmani
shreyalakhmani06@gmail.com