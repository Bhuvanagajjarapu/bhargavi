import React from 'react';
import './styles.css';

const Course = () => {
  const courses = [
    "Information Technology",
    "Computer Science Engineering",
    "Artificial Intelligence & Machine Learning",
    "Electronics and Communication Engineering",
    "Artificial Intelligence & Data Science"
  ];

  return (
    <div className="container">
      <h2>Available Courses</h2>
      <div className="course-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course}</h3>
            <p>Course description goes here. It's a brief overview of the course.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
