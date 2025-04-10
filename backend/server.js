const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log('No MongoDB URI provided. Database connection skipped.');
      return false;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    return false;
  }
};

// Routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Contact Routes
app.use('/api/contact', (req, res, next) => {
  if (!mongoose.connection.readyState) {
    return res.status(503).json({ 
      success: false, 
      message: 'Database connection not available. Please configure MongoDB in .env file.'
    });
  }
  next();
}, require('./routes/contactRoutes'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;

// Start server, attempt DB connection but continue even if it fails
const startServer = async () => {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();