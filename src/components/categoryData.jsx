import React from 'react'
import DataItem from './dataItem';
import '../components/categoryData.css'

const CategoryData = (props) => {
    const {productData}=props;
    
         return (
    <div className='box2'>
       <div className='col'>
         {productData.map((item)=>{
            return <div className='col'>
             <DataItem  oldprice={item.old_price} newprice={item.new_price} name={item.name} img={item.img} descript={item.description} discount={item.discount} id={item.id}/>

            </div>
           
         })}
       </div>
    </div>
  )
}

export default CategoryData 