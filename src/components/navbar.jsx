import React, { useState } from 'react';
import '../components/navbar.css';
import img from '../images/eCommerce-logo-2.jpg'
import {Link} from  "react-router-dom";


const Navbar = () => {
  const[data,setdata]=useState();
  return (
    <div className='navbar'> 
      <div className='title'>
        <img src={img} alt="" />
        <span>Lootlo</span>
      </div>
      <div className='sites'>
        <ul>
            <Link to="/" style={{textDecoration: 'none'}}><li onClick={()=>{setdata("home")}}>Home{data==="home"?<hr/>:null}</li></Link>
            <Link  to="/mobileData" style={{textDecoration: 'none'}}><li  onClick={()=>{setdata("mobiles")}}>Mobile{data==="mobiles"?<hr/>:null}</li></Link>
            <Link to="/computer" style={{textDecoration: 'none'}}><li onClick={()=>{setdata("computers")}}>Computer{data==="computers"?<hr/>:null}</li></Link>
            <Link to="/homeAppliance" style={{textDecoration: 'none'}}><li onClick={()=>{setdata("homeappliance")}}>Home-Appliances{data==="homeappliance"?<hr/>:null}</li></Link>
        </ul>
      </div>
      <div className='signup'>
        <Link to="/sign-up" style={{textDecoration: 'none'}}><button>Sign-Up</button></Link>
         <Link to="/cart-item"><button className='cart-btn'>Cart-Items</button></Link>
      </div>
    </div>
  )
}

export default Navbar;