import React, { useEffect, useState } from 'react'
import Course from '../Course/Course'
import './studyroom.css'

const StudyRoom = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='study-room'>
            <div className="course-container">
                <h2>Study Hour</h2>
                <div className="courses">
                    {
                        courses.map(course => <Course course={course}></Course>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h2>Shahtaz Rahman</h2>
            </div>
        </div>
    )
}

export default StudyRoom