import React, { Component } from 'react'
import Nouislider from "nouislider-react";
// import "nouislider/distribute/nouislider.css";
import "nouislider/distribute/nouislider.css";


// const arr = ['1', '2', '3', '4', '5'];
class By_age_search extends Component {
    state = {
        // textValue: null,
        // percent: null
        first: null,
        second: null
      };
     
      onSlide = (render, handle, value, un, percent) => {
        this.setState({
        //   textValue: value[0].toFixed(2),
        //   percent: percent[0].toFixed(2)
        first: value[0],
        second: value[100]
        });
      };
     
      render() {
        const { first, second } = this.state;
        return (
          <div>
            <Nouislider
              connect
              start={[0,100]}
              behaviour="tap"
              range={{
                min: [0],
                // "10%": [500, 500],
                // "50%": [4000, 1000],
                max: [100]
              }}
              onSlide={this.onSlide}
            />
            <div>
                {first} --- {second}
            </div>
          </div>
        );
      }
}

export default By_age_search;