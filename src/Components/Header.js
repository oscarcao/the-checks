import React from 'react'
import AUheading from '@gov.au/headings'

import tickIcon from '../images/header-tick.svg';

export default ({ pageTitle = 'Life Checks' }) => (
    <header className="dh-header row" role="banner">
        <div className="col-xs-12">
            <AUheading size="xl" level="1" className="au-body au-body--dark">{pageTitle} <img src={tickIcon} alt="" /></AUheading>
        </div>
    </header>
)