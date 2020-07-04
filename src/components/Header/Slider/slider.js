import React, { Component } from 'react'
import './slider.css';
import {Link} from 'react-router-dom';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Slide_Pic_1 from '../../../media/slider/slide_pic_1.jpg';
import Slide_Pic_2 from '../../../media/slider/slide_pic_2.jpg';
import Slide_Pic_3 from '../../../media/slider/slide_pic_3.jpg';




class MySlider extends Component {

  componentDidMount(){
    // window.jQuery(document).ready(function(){
    //     window.jQuery(".slider").slick({
    //       responsive: [{
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 3,
    //             infinite: true
    //           }}]
    //         });
    //       });
          window.jQuery(document).ready(function(){
            window.jQuery('.slider').slider();
          });         
} 


  //..........................................    
//   componentDidMount(){
//     window.jQuery(document).ready(function(){
//         window.jQuery('.carousel.carousel-slider').carousel({
//           fullWidth: true,
//           indicators: true,
//           fullWidth: true,
//           center: true
//         });
//       });         
// } 

//.........................................

  render() {
    // let settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 200,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   centerMode: true,
    //   tabindex: 0

    // };
        return (
            <div className='mySliderCanvusX'>
                <div className="slider">
    <ul className="slides">
      <li>
        <img src={Slide_Pic_2} alt="https://lorempixel.com/580/250/nature/1" /> 
        <div className="caption center-align">
          <h3>Find your lost one!</h3>
          <h5 className="light grey-text text-lighten-3">Lets - Find is an easy approach.</h5>
        </div>
      </li>
      <li>
        <img src={Slide_Pic_3} alt="https://lorempixel.com/580/250/nature/2" /> 
        <div className="caption left-align">
          <h3>I want go home.....</h3>
          <h5 className="light grey-text text-lighten-3">We will help you reach your home.</h5>
        </div>
      </li>
      <li>
        <img src={Slide_Pic_2} alt="https://lorempixel.com/580/250/nature/3" /> 
        <div className="caption right-align">
          <h3>I miss my son....</h3>
          <h5 className="light grey-text text-lighten-3">One day you will find your son here.</h5>
        </div>
      </li>
      <li>
        <img src={Slide_Pic_3} alt="https://lorempixel.com/580/250/nature/4" /> 
        <div className="caption center-align">
          <h3>Where are my parents?</h3>
          <h5 className="light grey-text text-lighten-3">Lets-Find will help you to approach your parents.</h5>
        </div>
      </li>
    </ul>
  </div>






                    {/* <Slider {...settings}>
        <div className="mySlideOne">
          <p>this is me shirely</p>
        </div>
        <div className="mySlideTwo">
          <h3>2</h3>
        </div>
        <div className="mySlideThree">
          <h3>3</h3>
        </div>
        <div className="mySlideFour">
          <h3>4</h3>
        </div>
        <div className="mySlideFive">
          <h3>5</h3>
        </div>
      </Slider>  */}




  {/* <div class="carousel carousel-slider" data-indicators="true">
    <Link class="carousel-item" to="#one!"><img src={Slide_Pic_1} className='responsive-img' /></Link>
    {/* <Link class="carousel-item" to="#one!"><div className="mySlide1">this is my slide one</div></Link> 
    <Link class="carousel-item" to="#two!"><img src={Slide_Pic_2} className='responsive-img' /></Link>
    <Link class="carousel-item" to="#three!"><img src={Slide_Pic_3} className='responsive-img' /></Link>
    {/* <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4" /></a> 
  </div> */}
</div>
        )
    }
}

export default MySlider;