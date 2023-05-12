import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import Loading from './Loading';
import "../styles/Cart.css"
import config from "../baseUrl.js"

const Cart = (user ,setUser) => {
    //cart items only have quantity and ids of products
    //we need to create new cartitems in frontend that have quantity and all features of product
    const [cartItems,setCartItems]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const [isToggle,setIsToggle]=useState(true);

    useEffect(()=>{
        let cartItemArray=[];
        fetch(`/cart-items`).then(r=>r.json()).then(items=>{
            
            items.forEach(item=>{
                if (item.quantity > 0){
                    //for each cart item, get the product id and fetch that only if there's more than 1
                    fetch(`https://fakestoreapi.com/products/${item.product_id}`).then(r=>r.json())
                    .then((product)=>{
                        //set our frontend  cart item to have everything that was in it before, as well as 
                        //the quantity and details of the product
                        
                        cartItemArray.push({quantity: item.quantity, ...product});
                        setCartItems([...cartItemArray]);
                    })
                }
                
                
            })
            
        })
        
        
        setIsLoading(false);
    },[isToggle])
    function getPrice(){
        let price=0.0;
        cartItems ? 
        cartItems.map(cartItem=>{
            price=price+(cartItem.quantity*cartItem.price)
        })
        : 
        price=price;
        return price;
    }

    function handleChangeQuantityClick(quantity, itemId){
        //we want to reset the entire thing and reload the page as well
        fetch(`/change-cart-quantity`, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: itemId,
                amount_to_change: quantity
            })
          })

        setIsToggle(!isToggle);
        window.location.reload();
    }

    if (isLoading){
        return(<Loading />)
    }
    if (!user){ return (
        //IF NOT LOGGED IN
    <div className="cart">
        <div className="cart-content">
            <h1 className="cart-content-label"><span>My Ca</span>rt</h1>
            <div className="cart-items-container">
                <div className="cart-empty">Cart is Empty</div>
            </div>
        </div>
        <div className="cart-price-content">
            <h1 className="cart-content-label"><span>PRICE DE</span>TAILS</h1>
            <div className="cart-price-details">
                <h6 className="cart-price-details-label">Price:</h6>
                <h6 className="cart-price-details-number cart-green">$0.00</h6>
                <h6 className="cart-price-details-label">Discounts:</h6>
                <h6 className="cart-price-details-number cart-green">$0.00</h6>
                <h6 className="cart-price-details-label">Delivery Fee:</h6>
                <h6 className="cart-price-details-number">$0.00</h6>
                <h6 className="cart-price-details-label">Total Price:</h6>
                <h6 className="cart-price-details-number">$0.00</h6>
            </div>
            <div className="strike-through"></div>
            <div className="cart-price-final-details">
                <h5 className="cart-green">You will save $0.00 on this order.</h5>
                <button className="place-order-button-guest" onClick={()=>{alert("Sorry, you can't do that.")}}>Place Order</button>
                <div className="error">You must be logged in to place order.</div>
            </div>
        </div>

    </div>

    )
    } 
    return (
            //IF LOGGED IN
        <div className="cart">
            <div className="cart-content">
                <h1 className="cart-content-label"><span>My Ca</span>rt</h1>
                <div className="cart-items-container">
                    {cartItems.length>0 ? (
                        cartItems.map((cartItem) => 
                            <div key={cartItem} className="cart-item">
                                <div className="cart-item-left">
                                    <img src={cartItem.image}></img>
                                    <div className="cart-item-left-buttons">
                                        <button onClick={()=>{handleChangeQuantityClick(-1, cartItem.id)}}>-</button>
                                        <input value={cartItem.quantity} disabled></input>
                                        <button onClick={()=>{handleChangeQuantityClick(1, cartItem.id)}}>+</button>
                                    </div>
                                </div>
                                <div className="cart-item-right">
                                    <h3>{cartItem.title.slice(0,50)}...</h3>
                                    <h4>${cartItem.price.toFixed(2)} <span><strike>$1{cartItem.price.toFixed(2)}</strike></span></h4>
                                    <button onClick={()=>{handleChangeQuantityClick(-cartItem.quantity, cartItem.id)}}>Remove</button>
                                </div>
                            </div>)
                        ) : 
                            <div className="cart-empty">Cart is Empty</div>
                        }
                </div>
            </div>
            <div className="cart-price-content">
                <h1 className="cart-content-label"><span>PRICE DE</span>TAILS</h1>
                <div className="cart-price-details">
                    <h6 className="cart-price-details-label">Price:</h6>
                    <h6 className="cart-price-details-number ">${(getPrice()).toFixed(2)}</h6>
                    <h6 className="cart-price-details-label">Discounts:</h6>
                    <h6 className="cart-price-details-number ">${(getPrice()/10).toFixed(2)}</h6>
                    <h6 className="cart-price-details-label">Delivery Fee:</h6>
                    <h6 className="cart-price-details-number">$0.00</h6>
                    <h6 className="cart-price-details-label">Total Price:</h6>
                    <h6 className="cart-price-details-number">${(getPrice()-(getPrice()/10)).toFixed(2)}</h6>
                </div>
                <div className="strike-through"></div>
                <div className="cart-price-final-details">
                <h5 className="cart-green">You will save ${(getPrice()/10).toFixed(2)} on this order.</h5>
                    <button className="place-order-button" onClick={()=>{alert("Sorry, you can't do that.")}}>Place Order</button>
                </div>
            </div>
    
        </div>
    
        )
 } 

export default Cart;
