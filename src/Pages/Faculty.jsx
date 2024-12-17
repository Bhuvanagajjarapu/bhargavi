import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './faculty.css'; 

function Faculty() {
    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        fetch('/api/faculty')
            .then(response => response.json())
            .then(data => setFaculty(data));
    }, []);

    return (
        <div className="container">
            <h2>Faculty List</h2>
            <ul>
                {faculty.map((member, index) => (
                    <li key={index}>
                        <Link to={`/faculty/${member.id}/${member.name}`}>
                            {member.name} - {member.department}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Faculty;
