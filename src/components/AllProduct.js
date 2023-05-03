import React from 'react';
import { useHistory } from 'react-router';
import "../styles/AllProduct.css"
function AllProduct (props) {
    const history=useHistory();
    return (
        <div className="all-product-item" onClick={()=>{history.push(`/products/${props.product.id}`)}}>
            <img src={props.product.image}></img>
            <h3>{props.product.title.slice(0,30)}...</h3>
            <div className="all-star-rating-container">{props.product.rating}<span className="star">&#9733;</span></div>
            <h4>${props.product.price.toFixed(2)}</h4>


        </div>
    );
}

export default AllProduct;
