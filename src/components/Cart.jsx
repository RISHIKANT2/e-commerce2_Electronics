import React, { useContext } from 'react'
import '../components/Cart.css'

import CartItem from './CartItem';
import { ShopContext } from './ShopContextProvider';


const Cart = () => {
    const {allproduct,CartItems}= useContext(ShopContext);
  return (
    <div>
        <CartItem  />
    </div>

  )
}

export default Cart