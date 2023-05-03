import React, {useState} from 'react';
import "../styles/Review.css"
import StarRating from './StarRating';

const Review = (props) => {
    const [rate,setRate]=useState(0);
    const [textReview,setTextReview]=useState("");
    const[errors,setErrors]=useState("");
    function handlePostClick (){
        fetch(`/add-review`, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: props.item.id,
                rev: textReview,
                rating: rate,
                username: props.user.user.username
            })
          }).then((r)=>
            {            
            if (r.ok){
                r.json().then(data=>{
                    //successfully added review
                    window.location.reload();
                    
                })
            }else {
                r.json().then(data=>{
                    //add to cart didn't work, either internal server error or not logged in
                    setErrors(data.error)})
            }
        }
    )
          
    }
    if (props.isReview){
        // IF SHOWING

        return(
            <div className="review-container">

                <div className="write-review-container">
                    <div className="user-container">
                        <div>
                            <h1>{props.user.user.username.slice(0,1)}</h1>
                        </div>

                        <h2>{props.user.user.username}</h2>
                    </div>
                    <div className="rating-container">  
                        <StarRating setRate={setRate}/>
                    </div>
                    <div className="write-review-content-container">
                        <label>Write a Review</label>
                        <textarea placeholder="Leave your thoughts about the item here." onChange={(e)=>setTextReview
                        (e.target.value)}></textarea>  
                        <div className="write-review-content-buttons-container">
                            <button onClick={()=>props.setIsReview(false)} className="cancel-button">Cancel</button>
                            <button className="post-button" onClick={()=>handlePostClick()}>Post</button>  
                        </div>
                        {errors ? (
                            <div key={errors} className="add-review-error">Oops! {errors}.</div>
                        ) : (
                            <></>
                        )}
                    </div>

                </div>

            </div>
        )
    }
    return (
        <div>
            
        </div>
    );
}

export default Review;
