import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import './cart.css'
import profile from '../../images/profile.jpg'

const Cart = () => {
  return (
    <div>
      <div className='profile'>
        <img src={profile} alt='Profile' />
        <div>
          <h2>Shahtaz Rahman</h2>
          <p><FontAwesomeIcon className='icon' icon={faGraduationCap}/>Student of Science</p>
        </div>
      </div>
    </div>
  )
}

export default Cart