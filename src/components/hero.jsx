import React from 'react';
import '../components/hero.css';
import basket from '../images/basket.jpg';


const Hero = (props) => {
  const{img,bgImg}=props;
  return (
    <div className='banner' style={{ "background-image":`url(${bgImg})`}}>
        <div className='left-side'>
            <p>TOP BRANDS</p>
            <h2>Grab your Favourites with 50% off on each items</h2>
            <button>Explore more<i class='bx bxs-chevrons-right'></i></button>
        </div>
        <div className="right-side">
          <img src={basket} alt="" />
        <img src={img} alt="" />

        </div>
    </div>
  )
}

export default Hero;