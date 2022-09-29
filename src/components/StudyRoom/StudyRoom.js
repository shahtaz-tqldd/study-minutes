import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faNavicon } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import Course from '../Course/Course'
import './studyroom.css'
import Cart from '../Cart/Cart';

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
                    <FontAwesomeIcon className='nav-icon' icon={faNavicon}/>
                    <h2>
                        <FontAwesomeIcon className='book-icon' icon={faBook} />
                        Study Hour</h2>
                    <p>Study Attentively, Study Daily</p>
                </div>
                <div className="courses">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    )
}

export default StudyRoom