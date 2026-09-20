# Blogify

A full-stack blogging application built with Node.js, Express, MongoDB, Mongoose and EJS.

## Features

- User signup and login
- JWT-based authentication
- Create blog posts
- Cover image uploads
- Comments
- User roles
- MongoDB persistence
- EJS server-side rendering

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- JSON Web Token (JWT)
- Multer

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file from `.env.example` and add your MongoDB connection string and JWT secret.

3. Start the application:

```bash
npm start
```

For development:

```bash
npm run dev
```

The app runs on `http://localhost:8000` by default.

## Environment variables

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
PORT=8000
```

Never commit `.env` or database credentials to GitHub.
