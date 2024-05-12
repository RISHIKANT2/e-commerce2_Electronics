import React from 'react'
import '../components/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className="wholebody">
         <div className="box-3">
        <div className="title1">
            <h5>Login-Here</h5>
        </div>
        <input type="text"  placeholder='Username'/><br/>
        <input type="password" placeholder='password'/><br />
        <button className="signSubmit">Submit</button>
        <p>Create an account<Link to="/sign-up">SignUp-Here</Link></p>
    </div>
    </div>
    </div>
  )
}

export default Login