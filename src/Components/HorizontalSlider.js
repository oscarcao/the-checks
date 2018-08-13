import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class HorizontalSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      horizontal: 10
    }
  }

  handleChangeHorizontal = value => {
    this.setState({
      horizontal: value
    })
  };

//   handleChangeVertical = value => {
//     this.setState({
//       vertical: value
//     })
//   };

  render () {
    const { horizontal } = this.state

    return (
      <div className='slider custom-labels'>
        <Slider
          min={0}
          max={10}
          value={horizontal}
          handleLabel={horizontal}
          onChange={this.handleChangeHorizontal}
        />
      </div>
    )
  }
}

export default HorizontalSlider