import React from 'react'
import Course from '../Course/Course'
import './studyroom.css'

const StudyRoom = () => {
  return (
    <div>
        <div className="course-container">
            <h2>Study Hour</h2>
            {
                <Course></Course>
            }
        </div>
        <div className="cart-container">
            <h2>Shahtaz Rahman</h2>
        </div>
    </div>
  )
}

export default StudyRoom