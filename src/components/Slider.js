import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./SliderData";
import "../styles/Slider.scss";
import config from "../baseUrl.js"

const Slider = () => {
  const history=useHistory();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayProducts,setDisplayProducts]=useState([]);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    fetch(`/products`).then(r=>r.json()).then((results)=>{
        setDisplayProducts([...results.products.slice(1,4)]);
    })
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={()=>prevSlide()} />
      <AiOutlineArrowRight className="arrow next" onClick={()=>nextSlide()} />
      {displayProducts.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <h3>${slide.price.toFixed(2)}</h3>
                  <button className="--btn --btn-primary slider-button" onClick={()=>{history.push(`/products/${slide.id}`)}}>Buy Now</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;