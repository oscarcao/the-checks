import React, { Component } from 'react';
import NextButton from '../Components/NextButton';

export default class Page extends Component {
    render() {
        return (
            <div className="row">
                <div className="grids col-lg-12">
                    <NextButton></NextButton>
                </div>
            </div>
        );
    }
}