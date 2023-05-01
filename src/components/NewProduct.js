import React from 'react';
import { useHistory } from 'react-router';
import "../styles/NewProduct.css"
function NewProduct (props) {
    const history=useHistory();
    return (
        <div className="new-product-item">
            <img src={props.product.image}></img>
            <h3>{props.product.title.slice(0,30)}...</h3>
            <h4>${props.product.price.toFixed(2)}</h4>
            <button onClick={()=>{history.push(`/products/${props.product.id}`)}}>See Item</button>


        </div>
    );
}

export default NewProduct;
