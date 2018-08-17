import React, { Component } from 'react';
import NextButton from '../Components/NextButton';

import DHSlider from '../Components/DHSlider'
import DHControlInputList from '../Components/DHControlInputList'

const sampleOptions = [
    {
        label: 'label1',
        name: 'name',
        value: 'value1',
    },
    {
        label: 'label2',
        name: 'name',
        value: 'value2',
    },
    {
        label: 'label3',
        name: 'name',
        value: 'value3',
    },
]


export default class Page extends Component {
    render() {
        return (            
            <div className="row">
                <div className="grids col-lg-12">
                    <h3>This is a Slider:</h3>
                    <DHSlider leftLabel="Left Label" rightLabel="Right Label" defaultValue={50} min={0} max={100} />
                    <h3>This is a Control Input List</h3>
                    <DHControlInputList options={sampleOptions} type="checkbox" />
                    <DHControlInputList options={sampleOptions} type="radio" minSelection={2} maxSelection={5} />
                    <NextButton></NextButton>
                </div>
            </div>
        );
    }
}