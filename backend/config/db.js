// db.js
require('dotenv').config();
const mysql = require('mysql');

const connectDB = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL:', error.message);
      process.exit(1); // Exit on failure
    }
    console.log('MySQL Connected...');
  });

  return connection;
};

// Exporting the connectDB function
module.exports = connectDB;
