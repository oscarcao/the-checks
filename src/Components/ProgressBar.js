import React, { Component } from 'react';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.currentValue = 0;
        this.maxValue = 100;
        this.percentage = 0;
        this.state = {
        percentage: 0
    }
    
    if(this.props.currentValue) {
        this.currentValue = this.props.currentValue;
    }

    if(this.props.maxValue) {
        this.maxValue = this.props.maxValue;
    }

    this.percentage = (this.currentValue * 100 / this.maxValue);
    }
    
    render() {
        return (
            <div className="progress-bar">
                <Filler percentage={this.percentage} />
            </div>
        )
    }  
}

const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
}
