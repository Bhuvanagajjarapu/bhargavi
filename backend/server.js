const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
(async () => {
  try {
    await connectDB(); // Ensure database connection before starting the server
    console.log('Database connection successful.');
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1); // Exit process with failure
  }
})();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/students', require('./routes/studentRoutes')); // Student API routes
app.use('/api/faculty', require('./routes/facultyRoutes')); // Faculty API routes

// Health Check Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
