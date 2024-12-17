const Faculty = require('../models/facultyModel');

// @desc Get all faculty members
// @route GET /api/faculty
const getFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.json(faculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Add a faculty member
// @route POST /api/faculty
const addFaculty = async (req, res) => {
    const { name, department, email } = req.body;

    try {
        const newFaculty = new Faculty({
            name,
            department,
            email
        });

        const savedFaculty = await newFaculty.save();
        res.status(201).json(savedFaculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getFaculty, addFaculty };
