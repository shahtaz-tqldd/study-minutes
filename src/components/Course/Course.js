import React from 'react'
import './course.css'

const Course = (props) => {
    const {courseName} = props.course
  return (
    <div>
        <h3>{courseName}</h3>
    </div>
  )
}

export default Course