import React, { useContext } from 'react'
import './dataItem.css'
import { ShopContext } from './ShopContextProvider';

const DataItem = (props) => {
    const{img,oldprice,newprice,name,descript,discount,id}=props;
    const{addCartItem}= useContext(ShopContext);
  return (
    <div className='image-container'>
      <div className="leftbox">
        <img src={img} alt="" />
        </div>  

        <div className="rightbox">
          <h4>{name}</h4>
          <div className="price">
            <span className='oldprice'> &#8377;{oldprice}</span><span> &#8377;{newprice}</span>
          </div>
          <span className='discount'>Discount: {discount}</span>
          <div className="description">{descript}</div>
          <button className='additem' onClick={()=>{addCartItem(id)}}>Add to Cart</button>
        </div>
    </div>
  )
}

export default DataItem