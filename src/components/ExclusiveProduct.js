import React from 'react';
import { useHistory } from 'react-router';
import "../styles/ExclusiveProduct.css"
const ExclusiveProduct = (props) => {
    const history = useHistory();
    return (
        <div className="exclusive-product-item" >
            <div className='exclusive-product-item-content'>
                <h3>{props.product.title.slice(0,30)}...</h3>
                <p>{props.product.description.slice(0,180)}...</p>
                <h4>${props.product.price.toFixed(2)} <span><strike>$1{props.product.price.toFixed(2)}</strike></span></h4>

                <button onClick={()=>{history.push(`/products/:${props.product.id}`)}}> Buy Now</button>


            </div>
            <div className='exclusive-product-item-image'>
                 <img src={props.product.image}></img>   
            </div>


        </div>
    );
}

export default ExclusiveProduct;
