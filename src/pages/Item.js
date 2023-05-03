import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import Loading from './Loading';
import Review from '../components/Review';
import "../styles/Item.css"
const Item = (user) => {
    const history=useHistory();
    const[item,setItem]=useState({});
    const[isLoading,setIsLoading]=useState(true);
    const [errors,setErrors]=useState("");
    const [cartErrors,setCartErrors]=useState("");
    const[isReview,setIsReview]=useState(false);
    const[reviews,setReviews]=useState([]);
    useEffect(() => {
    //sets the itemId based on the url
        const url = window.location.href;
        let urlChars=url.split("");
        let newUrl=[];
        for (let i=urlChars.length-1;i>=0;i--){
            if (urlChars[i]==="/"){
                break;
            }
            if(newUrl.length<2){

                newUrl.unshift(urlChars[i])
            }
        }

        newUrl=newUrl.join("");

        fetch(`/products/${newUrl}`).then(r=>r.json())
        .then(data=>{
            setItem({...data});
            //get the reviews for the item
            fetch(`/get-reviews`, {
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: data.id,
                    
                })
              }).then((r)=>
                {            
                if (r.ok){
                    r.json().then(results=>{
                        //successfully got reviews
                        setReviews([...results]);
                        
                    })
                }
            }
        )
            setIsLoading(false);

        })
        
        
    }, []);

    function handleAddToCartClick (){
        fetch(`/add-to-cart`, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: item.id
            })
          }).then((r)=>
            {            
            if (r.ok){
                r.json().then(data=>{
                    //successfully added to cart
                    history.push("/cart")
                    
                })
            }else {
                r.json().then(data=>{
                    //add to cart didn't work, either internal server error or not logged in
                    setErrors(data.error)})
            }
        }
    )
          
    }


    if (isLoading){
    return (
        <Loading />
    )
        
    }
    if (!user){
        //NOT logged in
        return (
            <>
            <div className={`item-container ${isReview? "grayed" :""}`} onClick={()=>setIsReview(false)}>
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
                            <button className="add-to-cart" onClick={()=>handleAddToCartClick()}>Add to Cart</button>
                        </div>
                        <div className="errors">
                            {errors ? (
                                <div key={errors} className="add-to-cart-error">Oops! {errors}.</div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
                <h1 className="item-reviews-container-label"><span>See Re</span>views</h1>
                <div className="item-reviews-container">
                    <div className="add-review-container">
                        <button onClick={(e)=>setCartErrors("Must be logged in to add a review.")}>Add a Review</button>
                        {cartErrors ? (
                                <div key={cartErrors} className="add-to-cart-error">{cartErrors}</div>
                            ) : (
                                <></>
                            )}
                    </div>
                </div>
                
          </div>  
          </>
        );
    }
    //LOGGED IN
    return (
        <>
        <div className={`item-container ${isReview? "grayed" :""}`} onClick={()=>setIsReview(false)}>
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
                        <button className="add-to-cart" onClick={()=>handleAddToCartClick()}>Add to Cart</button>
                    </div>
                    <div className="errors">
                        {errors ? (
                            <div key={errors} className="add-to-cart-error">Oops! {errors}.</div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
            <div className="item-reviews-container-label">
                <h1><span>See Re</span>views </h1>
                <div className="item-star-rating-container">{item.rating} &#9733;</div>
            </div>
            <div className="item-reviews-container">
                <div className="item-review">
                    {reviews.length>0 ? reviews.map((review)=>{
                        
                        return(
                            <>
                            <div className="review-user-container">
                                <div>
                                    <h1>{review.username.slice(0,1)}</h1>
                                </div>
        
                                <h2>{review.username}</h2>
                                <h1>{[...Array(review.rating)].map((star,index)=>{
                                return(<span className="review-star">&#9733;</span>)
                            }) }</h1>
                            </div>

                            <h2 className="review">{review.rev}</h2>

                            </>
                        )
                    }) : <></>}
                </div>
                <div className="add-review-container">
                    <button onClick={(e)=>{
                        if (user){
                            e.stopPropagation();
                            setIsReview(true);
                        }


                        }}>Add a Review</button>
                </div>
            </div>
            
      </div>
        <Review isReview={isReview} setIsReview={setIsReview} user={user} item={item}/>   
      </>
    );
}

export default Item;
