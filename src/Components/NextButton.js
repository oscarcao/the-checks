import React, { Component } from 'react';
import AUbutton from '@gov.au/buttons';

export default class NextButton extends Component {
    render() {
        const buttonText = "NEXT";
        return (
            <div className="button-wrapper">
                <AUbutton>{buttonText}</AUbutton>
            </div>
        );
    }
}