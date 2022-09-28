import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
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
                <div className='header'>
                    <h2>
                        <FontAwesomeIcon className='book-icon' icon={faBook} />
                        Study Hour</h2>
                    <p>Study Attentively, Study Daily</p>
                </div>
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