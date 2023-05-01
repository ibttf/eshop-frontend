import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider"
import NewProduct from "../components/NewProduct";
import ExclusiveProduct from "../components/ExclusiveProduct";
import AllProduct from "../components/AllProduct";
import "../styles/Home.css";
const Home = ({ user }) => {
  const [products,setProducts]=useState([])

  
  

  useEffect(()=>{
    //set all the products on frontend equal to array of products seeded on backend
    fetch("/products").then(r=>r.json()).then((results)=>{
      setProducts([...results.products]);

    })


  },[])
  return (
    <div className="home">

    <Slider />
    <h3>Brand New Products:-</h3>
    <div className="new-products-container">
      {products.slice(4,7).map((product)=>{
        return(
          <NewProduct product={product} key={product.id}>
          </NewProduct>
        )
      })}
    </div>
    <h3>Exclusive Offer:-</h3>
    <div className="exclusive-products-container">
    {products.slice(17,19).map((product)=>{
        return(
          <ExclusiveProduct product={product} key={product.id}>
          </ExclusiveProduct>
        )
      })}
    </div>
    <h3>All Products</h3>
    <div className="all-products-container">
    {products.map((product)=>{
        return(
          <AllProduct product={product} key={product.id}>
          </AllProduct>
        )
      })}
    </div>
  </div>
  )
};

export default Home;
