import React, { Component } from 'react'

import Slide_Pic_1 from '../../../media/slider/slide_pic_1.jpg';
import Slide_Pic_2 from '../../../media/slider/slide_pic_2.jpg';
import Slide_Pic_3 from '../../../media/slider/slide_pic_3.jpg';




class Slider extends Component {
    render() {
        return (
            <div>
              
        <div className="bd-example">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" >
              <div class="carousel-item active">
                <img src={Slide_Pic_1} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                      Chal oye
                    {/* <h5>{this.state.slideX.Title}</h5> */}
                    {/* <p>{this.state.slideX.Headline}</p> */}
                  </div>
      </div>
                <div class="carousel-item">
                  <img src={Slide_Pic_2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      Chal oye
                      {/* <h5>{this.state.slideXi.Title}</h5> */}
                      {/* <p>{this.state.slideXi.Headline}</p> */}
                    </div>
      </div>
      <div class="carousel-item">
                  <img src={Slide_Pic_3} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      Chal oye
                      {/* <h5>{this.state.slideXii.Title}</h5> */}
                      {/* <p>{this.state.slideXii.Headline}</p> */}
                    </div>
      </div>  
            </div>
            </div></div></div>
        )
    }
}

export default Slider;