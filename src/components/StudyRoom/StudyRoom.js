import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import Course from '../Course/Course'
import './studyroom.css'
import Cart from '../Cart/Cart';
import Questions from '../Questions/Questions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLocalStorage, deleteCart, getStoredCart } from '../../utilities/addToLocalStorage';

const StudyRoom = () => {

    const notify = (totalTime) => {
        if(totalTime>=10){
            toast.success("Congratulations! You have completed your study for today",
            { position: toast.POSITION.TOP_CENTER })
        }
        else{
            toast.warning("You Should Study at least 10 hours a day",
            { position: toast.POSITION.TOP_CENTER })
        }
    }

    const [courses, setCourses] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedCourse = courses.find(course => course.id == id);
            if(addedCourse){
                const quantity = storedCart[id]
                addedCourse.quantity = quantity;
                savedCart.push(addedCourse);
            }
        }
        setCart(savedCart);
    },[courses])

    const addToListHandle = (course) => {
        const newCart = [...cart, course]
        setCart(newCart)
        addToLocalStorage(course.id)
    }

    const handleClear =()=>{
        deleteCart();
        setCart([]);
    }

    return (
        <div className='study-room'>
            <div className="course-container">
                <ToastContainer />
                <div className='header'>
                    <h2><FontAwesomeIcon className='book-icon' icon={faBook} />Study Hours</h2>
                    <p>Study Attentively, Study Daily</p>
                </div>
                <div className="courses">
                    {
                        courses.map(course => {
                            return <Course
                                key={course.id}
                                course={course}
                                addToListHandle={addToListHandle}
                            ></Course>
                        })
                    }
                </div>
                <Questions></Questions>
            </div>
            <div className="cart-container">
                <Cart cart={cart} notify={notify} handleClear={handleClear}></Cart>
            </div>
        </div>
    )
}

export default StudyRoom