// studentModel.js
const connectDB = require('../config/db');  // Importing the connectDB function
const connection = connectDB();  // Call connectDB to get the connection

// Function to get all students
const getAllStudents = (callback) => {
  connection.query('SELECT * FROM students', callback);
};

// Function to get a student by ID
const getStudentById = (id, callback) => {
  connection.query('SELECT * FROM students WHERE id = ?', [id], callback);
};

// Export the functions
module.exports = {
  getAllStudents,
  getStudentById
};
