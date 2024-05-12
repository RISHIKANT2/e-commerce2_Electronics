import React, { useContext } from 'react'
import { ShopContext } from './ShopContextProvider';
import '../components/CartItem.css'

function CartItem(props) {
  const{addCartItem,removeCartItem,CartItem,allproduct}= useContext(ShopContext)
    const{name,price,no,img}=props;
  return (
    <div>
       
        {allproduct.map((e)=>{
            if(CartItem[e.id]>0){
               return <>
               <div className="cartContainer">
                
              <div className="leftPart">
                  <img src={e.img} alt="" />
              </div>
              <div className="right-part">
              <div className="rightSide">
                  <div className="cartname"><b><u>NAME</u></b> : {e.name}</div>
                  <div className="cartprice"><b><u>PRICE</u></b> : {e.new_price}</div>
                  <div className="quantity"><b><u>QUANTITY</u></b> : {CartItem[e.id]}</div>
                  <div className="cartTotal"><b><u>TOTAL PRICE</u></b> : {e.new_price*CartItem[e.id]}</div>
                  <div className="cart-btn1">
                  <button className='plus' onClick={()=>{addCartItem(e.id)}}>+</button>
                   <button className='minus' onClick={()=>{removeCartItem(e.id)}}>-</button></div>
              </div>
                   
             </div>
                  
                   
                  </div>
                  
                 </>
                 }
        })}
        
    </div>
  )
}

export default CartItem