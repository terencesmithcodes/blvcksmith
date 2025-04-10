# Blvck Smith Portfolio

A personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS.

## Features

- Responsive design
- Portfolio projects showcase
- Contact form connected to MongoDB
- AWS deployment ready

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: AWS (Amazon Web Services)

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- MongoDB Atlas account (for database)
- AWS account (for deployment)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blvcksmith.git
   cd blvcksmith
   ```

2. Install dependencies:
   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. Create a `.env` file in the `backend` directory with the following variables:
   ```
   PORT=5000
   NODE_ENV=development
   MONGO_URI=your_mongodb_connection_string
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   This will start both the backend server (on port 5000) and the React frontend (on port 3000).

## AWS Deployment

### Setting up AWS

1. Create an EC2 instance
2. Configure security groups
3. Set up Elastic IP
4. Install Node.js on the EC2 instance
5. Clone your repository to the EC2 instance
6. Install PM2 for process management
7. Configure Nginx as a reverse proxy
8. Set up SSL with Let's Encrypt

Detailed AWS deployment instructions are available in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Project Structure

```
blvcksmith/
├── backend/                # Express server
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── server.js           # Server entry point
├── frontend/               # React frontend
│   ├── public/             # Static files
│   └── src/                # React components
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       └── App.js          # Main app component
└── package.json            # Project dependencies
```

## License

MIT