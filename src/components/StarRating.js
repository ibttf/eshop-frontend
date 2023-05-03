import React, {useState} from 'react';

import "../styles/StarRating.css"
const StarRating = (props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    function handleRatingClick(rate){
        props.setRate(rate);
    }
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={`star-button ${index <= (hover || rating) ? "on" : "off"}`}
              onClick={() => {setRating(index); handleRatingClick(index)}}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

export default StarRating;
