import React from 'react'
import '../components/signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="wholebody">
         <div className='box-2'>
        <div className="title1">
            <h5>Sign-Up</h5>
        </div>
        <input type="text"  placeholder='Firstname'/><br/>
        <input type=" text" placeholder='Lastname'/><br/>
        <input type="email" placeholder='email' /><br />
        <input type="password" placeholder='passwaord'/><br />
        <input type="password" placeholder='confirm-password' /><br />
        <button id='submit'>Submit</button>
        <p>If Already have an account<Link to="/login">Login-Here</Link></p>
    </div>
    </div>
   
  )
}

export default Signup