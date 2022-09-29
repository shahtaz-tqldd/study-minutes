import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBookReader, faBook, faBookmark} from '@fortawesome/free-solid-svg-icons'
import './cart.css'
import profile from '../../images/profile.jpg'

const Cart = (props) => {
  const breakTime = [10, 15, 20, 30, 60];
  const notify = props.notify
  const handleClear = props.handleClear

  const [clickedBreakTime, setClickedBreakTime] = useState([0])

  const handleBreakTime = (number) =>{
    const timeClicked = number;
    setClickedBreakTime(timeClicked);
  }
  const cart = props.cart
  let totalTime = 0;
  for(const course of cart){
    totalTime += course.time;
    const decimal = parseFloat((totalTime - Math.floor(totalTime)).toFixed(2))
    if(decimal>0.59 ){
      const reminder = decimal%0.60
      totalTime = Math.floor(totalTime) +1 +reminder;
    }
  }
  return (
    <div className='cart-contain'>
      <div className='profile'>
        <img src={profile} alt='Profile' />
        <div>
          <h2>Shahtaz Rahman</h2>
          <p><FontAwesomeIcon className='icon' icon={faGraduationCap}/>Student of Science</p>
          <p><FontAwesomeIcon className='icon' icon={faBookReader}/>Class XII</p>
        </div>
      </div>
      <div className='exam-info'>
        <div className='subject'>
          <div className="info"><FontAwesomeIcon  className='icon' icon={faBook}/>Subject<br/><div>Physics</div> </div>
          <div className="info"><FontAwesomeIcon  className='icon' icon={faBookmark}/>Topic<br/><div>Ideal Gas</div></div>
        </div>
      </div>
      <div className='break'>
        <h3>Add A Break</h3>
        <div className='break-container'>
          {
            breakTime.map((number) => <div onClick={()=> handleBreakTime(number)}>{number}m</div>)
          }
          
        </div>
      </div>
      <div className='details'>
        <h3>Study Details</h3>
        <div>Total study time <span>{totalTime.toFixed(2)} h</span></div>
        <div>Break time <span>{clickedBreakTime} min</span></div>
      </div>
      <button className='btn-target' onClick={()=>notify(totalTime)}>Target Completed</button>
      <button className='btn-target record' onClick={handleClear} >Clear Record</button>
    </div>
  )
}

export default Cart