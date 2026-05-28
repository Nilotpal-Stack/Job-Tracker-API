# Job Tracker API
A secure and scalable backend REST API for tracking job applications, built using Node.js, Express.js, MongoDB, and JWT authentication.
This project allows users to register, log in securely, manage job applications, update application statuses, search/filter job records, and perform complete CRUD operations with protected routes.
The API follows a clean backend architecture using controllers, routes, models, middleware, and utility functions to ensure maintainability and scalability.

---

# Features

## Authentication & Authorization
- User Registration
- Secure Login System
- JWT Token Authentication
- Protected Routes
- Password Hashing using bcryptjs
---
## Job Management
- Create Job Applications
- Get All Jobs
- Get Single Job
- Update Job Details
- Delete Job Applications
---
## Search, Filter & Sorting
- Filter jobs by status
- Search jobs by company name
- Sort jobs by application date
---
## Security Features
- User-specific job access
- JWT protected APIs
- Hashed passwords
- Environment variable protection
- MongoDB schema validation
---

# Tech Stack

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose ODM

## Authentication
- JSON Web Token (JWT)
- bcryptjs

## Development Tools
- Nodemon
- Postman
- dotenv

---

# Project Structure

```bash
job-tracker-api/
│
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── jobController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Job.js
├── routes/
│   ├── authRoutes.js
│   └── jobRoutes.js
├── utils/
│   └── generateToken.js
├── .env.example
├── .gitignore
├── package.json
├── server.js
├── README.md
└── postman_collection.json
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Nilotpal-Stack/Job-Tracker-API.git
```

---

## 2. Navigate to Project Folder

```bash
cd job-tracker-api
```

---

## 3. Install Dependencies

```bash
npm init -y   
npm install -D nodemon 
npm install mongodb              
```

---

## 4. Create Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# Run Server

## Development Mode

```bash
npm run dev
```

---

## Production Mode

```bash
npm start
```

---

# API Base URL

```bash
http://localhost:5000
```

---

# Authentication APIs

## Register User

### POST
```bash
http://localhost:5000/api/auth/register
```

### Request Body

```json
{
  "name": "John",
  "email": "John@gmail.com",
  "password": "123456"
}
```

---

## Login User

### POST
```bash
http://localhost:5000/api/auth/login
```

### Request Body

```json
{
  "email": "John@gmail.com",
  "password": "123456"
}
```

---

## Get Logged-in User

### GET
```bash
http://localhost:5000/api/auth/me
```

### Headers

```bash
Authorization: Bearer TOKEN
```

---

# Job APIs

## Create Job

### POST
```bash
http://localhost:5000/api/jobs
```

---

## Get All Jobs

### GET
```bash
http://localhost:5000/api/jobs
```

---

## Get Single Job

### GET
```bash
http://localhost:5000/api/jobs/:Jobid
```

---

## Update Job

### PATCH
```bash
http://localhost:5000/api/jobs/:Jobid
```

---

## Delete Job

### DELETE
```bash
http://localhost:5000/api/jobs/:Jobid
```

---

# Filtering Examples

## Filter by Status

```bash
/api/jobs?status=applied
```

---

## Search by Company

```bash
/api/jobs?company=google
```

---

## Sort by Date

```bash
/api/jobs?sort=date
```

---

# Testing

The APIs were tested using:
- Postman
- MongoDB Atlas
- JWT Authentication

A Postman collection is included in the project.

---

# Error Handling

The API handles:
- Invalid JWT Tokens
- Duplicate User Registration
- Unauthorized Access
- Invalid Job IDs
- Invalid Status Validation
- Missing Authentication Tokens

---

# Future Improvements

- Pagination
- Role-based Access Control
- Refresh Tokens
- Email Notifications
- Swagger API Documentation
- Docker Deployment

---

# Author
Nilotpal Sarma
