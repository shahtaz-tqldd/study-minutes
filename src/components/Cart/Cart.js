import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarCheck, faClock, faBookReader, faBook, faBookmark} from '@fortawesome/free-solid-svg-icons'
import './cart.css'
import profile from '../../images/profile.jpg'

const Cart = () => {
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
          <div className='info'><FontAwesomeIcon  className='icon' icon={faCalendarCheck}/>Next Exam<br/><div>7 October, 22</div></div>
          <div className='info'><FontAwesomeIcon  className='icon' icon={faClock}/>T-minus<br/> <div>3 Days</div></div>
        </div>
        <div className='subject'>
          <div className="info"><FontAwesomeIcon  className='icon' icon={faBook}/>Subject<br/><div>Physics</div> </div>
          <div className="info"><FontAwesomeIcon  className='icon' icon={faBookmark}/>Topic<br/><div>Sound and Wave</div></div> </div>
      </div>
      <div className='break'>
        <h3>Add A Break</h3>
        <div className='break-container'>
          <div>10m</div>
          <div>15m</div>
          <div>20m</div>
          <div>30m</div>
          <div>1h</div>
        </div>
      </div>
      <div className='details'>
        <h3>Study Details</h3>
        <div>Total study time <span>5.30 h</span></div>
        <div>Break time <span>30 min</span></div>
      </div>
      <button className='btn-target'>Target Completed</button>
    </div>
  )
}

export default Cart