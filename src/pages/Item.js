import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import "../styles/Item.css"
const Item = () => {
    const history=useHistory();
    const[item,setItem]=useState({});
    const[isLoading,setIsLoading]=useState(true);
    useEffect(() => {

    //sets the itemId based on the url
        const url = window.location.href;
        let urlChars=url.split("");
        let newUrl=[];
        for (let i=urlChars.length-1;i>=0;i--){
            if (urlChars[i]==="/"){
                break;
            }
            newUrl.unshift(urlChars[i])
        }
        newUrl=newUrl.join("");
        fetch(`https://fakestoreapi.com/products/${newUrl}`).then(r=>r.json())
        .then(data=>{
            setItem({...data});
            setIsLoading(false);
        })
        
    });
    if (isLoading){
        return (
            <div>hello im loading</div>
        )
    }
    return (
        <div className="item-container">
            <div className="item-hero-container">
                <div className="item-hero-image">
                    <img src={item.image}></img>
                </div>
                <div className="item-hero-content">
                    <h1>{item.title}</h1>
                    <h4>${item.price.toFixed(2)} <span><strike>$1{item.price.toFixed(2)}</strike></span></h4>

                    <h5>{item.description}</h5>
                    <div className="item-hero-content-buttons-container">
                        <button className="back-to-home" onClick={()=>history.push("/")}>Back to Home</button>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
            <h1 className="item-reviews-container-label"><span>See Re</span>views</h1>
            <div className="item-reviews-container">

            </div>
      </div>
    );
}

export default Item;
