import React from 'react'
import './course.css'

const Course = (props) => {
    const {courseName, image, topics, time} = props.course
    const addToListHandle = props.addToListHandle
  return (
    <div className='course-card'>
        <img src={image} alt={courseName} />
        <h2>{courseName}</h2>
        <div className='topics'>{topics.map(topic => <span> {topic} </span>)}</div>
        <div className='study-time'><b>Study Time:</b> {time.toFixed(2)} hour</div>
        <button onClick={()=>addToListHandle(props.course)}>Add To List</button>
    </div>
  )
}

export default Course