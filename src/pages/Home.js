import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider"

import "../styles/Home.css";
const Home = ({ user }) => {
  const [products,setProducts]=useState([])

  
  

  useEffect(()=>{
    //set all the products on frontend equal to array of products seeded on backend
    fetch("/products").then(r=>r.json()).then((results)=>{
      setProducts([...results.products]);

    })


  },[])

  
  if (user) {
    //if logged in
    return (
      <div className="home">
        {products.map((product)=>{
          console.log(product);
          return (
            <div>
              {product.title}
            </div>
          )
        })}
      </div>
    );
  }

  return (
    //if not logged in
    <div className="home">

    <Slider />
      <div className="home-slider-container">

        {/* {products.slice(0,3).map((product)=>{
          return (
            <div>
              {product.title}
            </div>
          )
        })} */}
      </div>
  </div>
    );
};

export default Home;
