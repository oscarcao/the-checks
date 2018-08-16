import React, { Component } from 'react';
import NextButton from '../Components/NextButton';

import DHSlider from '../Components/DHSlider'

export default class Page extends Component {
    render() {
        return (            
            <div className="row">
                <div className="grids col-lg-12">
                    <h3>This is a Slider:</h3>
                    <DHSlider leftLabel="Left Label" rightLabel="Right Label" defaultValue={50} min={0} max={100} />
                    <NextButton></NextButton>
                </div>
            </div>
        );
    }
}