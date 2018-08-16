import React from 'react'
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'

import 'rc-slider/assets/index.css'

const Handle = Slider.Handle

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const DHSlider = ({leftLabel, rightLabel, ...sliderProps}) => (
    <div className="dh-slider">
        <span className="dh-slider__label dh-slider__label--left">{leftLabel}</span>
        <div className="dh-slider__slider">
            <Slider {...sliderProps} handle={handle} />
        </div>        
        <span className="dh-slider__label dh-slider__label--right">{rightLabel}</span>
    </div>
)

export default DHSlider