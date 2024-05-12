import {React} from 'react'
import '../components/items.css'
import Product from './product';
import { Link } from 'react-router-dom';



const Item = (props) => {
    const{img,name,oldprice,newprice,id}= props;
  return (
    <div className='container'>
        <div className="card" >
   <Link to={`product/${id}`}><img src={img} className="card-img-top" alt="..."/></Link>
  <div className="card-body">
   <h5 className="card-title">{name}</h5>
    <span className='old'>&#8377;{oldprice}</span><span>&#8377;{newprice}</span><br/>
      <button style={{'backgroundColor':'rgb(34,219,34)' ,'borderRadius':'10px'}}>Add to cart</button>
  </div>
</div>

    </div>
  )
}

export default Item