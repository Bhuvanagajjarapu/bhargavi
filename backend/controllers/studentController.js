const Student = require('../models/studentModel');

const getAllStudents = (req, res) => {
  Student.getAllStudents((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const getStudentById = (req, res) => {
  const id = req.params.id;
  Student.getStudentById(id, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

module.exports = {
  getAllStudents,
  getStudentById
};
