import React, { useContext } from 'react'
import '../components/productDetails.css';
import { ShopContext } from './ShopContextProvider';


const ProductDetails = (props) => {
const {product}= props;
const {addCartItem}= useContext(ShopContext);

  return (
    <div className='main-container'>
      <div className="leftbox1">
        <img src={product.img} alt="hi" />
        </div>  

        <div className="rightbox1">
          <h4>{product.name}</h4>
          <div className="price">
            <span className='oldprice'> &#8377;{product.old_price}</span><span> &#8377;{product.new_price}</span>
          </div>
          <span className='discount1'>Discount: {product.discount}</span>
          <div className="description1">{product.description}</div>
          <button className='additem' onClick={()=>{addCartItem(product.id)}} >Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetails;