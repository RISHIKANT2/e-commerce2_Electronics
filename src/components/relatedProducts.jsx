import React, { useContext } from 'react'
import { ShopContext } from './ShopContextProvider'
import Item from './items';
import '../components/relatedProduct.css';

const RelatedProducts = () => {
    const {allproduct}= useContext(ShopContext);
  return (
    <div className='realtedContainer row'>

        {allproduct.map((item,i)=>{
            return (<div className="col">
             <Item   oldprice={item.old_price} newprice={item.new_price} name={item.name} img={item.img} id={item.id} />

            </div>)
        })}
    </div>
  )
}

export default RelatedProducts