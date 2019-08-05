import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';


class Banner extends Component {
  render() {
    const sliders = this.props.slides;
    const slidersOutput = sliders.map((image,i) => {
      return (
        <div key={i}>
          <img src={"/public/images/"+image+".jpeg"} alt="img-1" />
          <p className="legend">Legend {i} </p>
        </div>
      );
    });
    return (
      <Carousel>
        {slidersOutput}
      </Carousel>
    );
  }
}


export default Banner;
