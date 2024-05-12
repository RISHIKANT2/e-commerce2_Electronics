import React from 'react'
import '../components/product.css';
import { useContext } from 'react';
import { ShopContext } from './ShopContextProvider';
import { useParams } from 'react-router-dom';
import ProductDetails from './productDetails';
import RelatedProducts from './relatedProducts';

const Product = () => {
    const {allproduct}= useContext(ShopContext);
    const {productId}= useParams();
    const product= allproduct.find((e)=> e.id=== Number(productId));

  return (
    <>
    <ProductDetails product={product}/>
    <RelatedProducts />
    </>
  )
}

export default Product
