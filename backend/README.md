# Express Backend Service

A production-ready Node.js Express backend service with MongoDB integration.

## Features

- Express.js web framework
- MongoDB with Mongoose ODM
- Security middleware (Helmet)
- CORS support
- Environment configuration with dotenv
- Error handling middleware
- Graceful shutdown handling
- Health check endpoint

## Prerequisites

- Node.js (>= 16.0.0)
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-backend-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env` file

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## Project Structure

```
src/
├── controllers/    # Business logic controllers
├── models/        # Database models (Mongoose schemas)
├── routes/        # API route definitions
└── server.js      # Main application entry point
```

## API Endpoints

- `GET /` - Root endpoint with service information
- `GET /health` - Health check endpoint

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)
- `MONGODB_URI` - MongoDB connection string

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC