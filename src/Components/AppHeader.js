import React from 'react';
import headerTick from '../images/header-tick.svg';

export default function AppHeader() {
    const headertext = "LIFE CHECKS";
    return (
        <div className="header">
            <div className="row">
                <div className="col-sm-12">
                    <div className="header-wrapper">
                        <h1 className="heading">{headertext}</h1>
                        <img src={headerTick} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
