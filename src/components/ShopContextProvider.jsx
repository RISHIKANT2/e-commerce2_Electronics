import React, { createContext, useState } from 'react'
import { allproduct } from './allproducts'

export const ShopContext= createContext("");

const ShopContextProvider = (props) => {
  
   const defaultItemSetup= ()=>{
      const cart={};
      for(let i=0;i<allproduct.length+1;i++){
        cart[i]=0;
      }
      return cart;
   }
   const[CartItem,setCartItem]= useState(defaultItemSetup());

    const  addCartItem =(id)=>{
       setCartItem((prev)=>{
           return ({...prev,[id]:prev[id]+1})
      })
      console.log(CartItem);

   }
   const removeCartItem =(id)=>{
      setCartItem((prev)=>{
          return ({...prev,[id]:CartItem[id]-1})
     })
  }
  const contextvalue= {allproduct,addCartItem,removeCartItem,CartItem};

  return (
     <ShopContext.Provider value={contextvalue}>
        {props.children}
     </ShopContext.Provider>
  )
}

export default ShopContextProvider