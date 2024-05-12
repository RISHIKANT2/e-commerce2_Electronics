import React from 'react';
import '../components/categoryItem.css';
import Item from './items';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
  const {productData,name}=props;
  return (
    <div className='box'>
      <Link to={`/${name}data`}><h4><u>{name}</u></h4></Link>
       <div className='row'>
         {productData.map((item)=>{
            return <div className='col'>
             <Item  oldprice={item.old_price} newprice={item.new_price} name={item.name} img={item.img} id={item.id}/>
            </div>
         })}
       </div>
    </div>
  )
}

export default CategoryItem