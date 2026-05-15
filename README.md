# Docker Test App

A simple Node.js application demonstrating Docker containerization with Express.js server and MongoDB integration.

## Features

- **Node.js Express Server** - RESTful API running on port 5600
- **Docker Containerization** - Complete Docker setup for easy deployment
- **MongoDB Integration** - Ready for MongoDB connection
- **Docker Compose** - Multi-container orchestration support
- **Lightweight Alpine Image** - Optimized with Node.js 18-Alpine for smaller footprint

## Project Structure

```
docker-testapp/
├── server.js              # Express.js server
├── package.json           # Project dependencies
├── Dockerfile             # Docker image definition
├── docker.yaml            # Docker Compose configuration
├── .dockerignore           # Files to exclude from Docker context
├── public/                # Static files
│   ├── index.html
│   └── style.css
└── README.md              # This file
```

## Quick Start

### Prerequisites

- Node.js 18+ (for local development)
- Docker & Docker Desktop
- npm or yarn

### Running Locally

```bash
# Install dependencies
npm install

# Start the server
node server.js
```

Server runs on `http://localhost:5600`

### Running with Docker

**Build the image:**

```bash
docker build -t docker-learn .
```

**Run the container:**

```bash
docker run --name docker-learn -p 5600:5600 --rm docker-learn
```

**Or use Docker Compose:**

```bash
docker compose -f docker.yaml up -d
```

## API Endpoints

### GET /

Returns a JSON array of users with sample data:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "age": 25
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bobjohnson@example.com",
    "age": 35
  }
]
```

## Docker Image Details

- **Base Image:** `node:18-alpine`
- **Working Directory:** `/app`
- **Exposed Port:** 5600
- **Entry Point:** `node server.js`

### Key Docker Features

- ✅ Proper `.dockerignore` to exclude node_modules and cache files
- ✅ Multi-stage optimized build with npm ci
- ✅ Cached layers for faster rebuilds
- ✅ Alpine-based image for minimal size

## Docker Hub

This image has been published to Docker Hub:

```bash
docker pull ishant9140/docker-test:latest
docker run -p 5600:5600 ishant9140/docker-test:latest
```

**View the full repository and profile:**

- 🐳 **Docker Hub Profile:** [ishant9140 on Docker Hub](https://hub.docker.com/u/ishant9140)
- 📦 **Docker Test Repository:** [ishant9140/docker-test](https://hub.docker.com/r/ishant9140/docker-test)

## Environment Setup

### Development with Live Reload

For development with automatic restart on file changes:

```bash
docker run -p 5600:5600 -v ${PWD}/server.js:/app/server.js docker-learn
```

### Configuration

The application uses the following configuration:

- **Port:** 5600 (configurable in `server.js`)
- **Environment:** Development (can be extended for production)

## MongoDB Integration (Future)

The application is set up to integrate with MongoDB. Uncomment the MongoDB connection code in `server.js` when ready to use:

```javascript
// const { MongoClient } = require("mongodb");
// const MONGO_URL = "your-mongodb-connection-string";
```

Update with your MongoDB connection details and enable the database routes.

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Docker** - Container platform
- **Docker Compose** - Container orchestration
- **MongoDB** - NoSQL database (optional)

## Common Issues & Solutions

### npm Tracker Error in Docker

**Solution:** Already implemented in Dockerfile:

- Uses `npm ci` instead of `npm install`
- Clears npm cache
- Uses `.dockerignore` to exclude local node_modules

### Port Already in Use

```bash
# Change the port mapping
docker run -p 5601:5600 docker-learn
```

### Container Exit Issues

```bash
# View logs
docker logs container-name

# Run in interactive mode
docker run -it docker-learn /bin/sh
```

## Contributing

Feel free to modify the code and rebuild the Docker image:

```bash
# Make changes
# Rebuild
docker build -t docker-learn .

# Test
docker run -p 5600:5600 docker-learn
```

## License

This project is open source and available for learning purposes.

## Author

Created by Ishant Yadav

---

**Last Updated:** May 15, 2026
