import React from 'react'

import DHProgressBar from './DHProgressBar'
import Header from './Header'
import Footer from './Footer'

export default ({ children, currentPage, numPages, pageTitle }) => (
    <div className="dh-layout container">
        <div className="row">
            <div className="col-xs-12">
                <DHProgressBar currentValue={currentPage} maxValue={numPages} />
            </div>
        </div>
        <Header pageTitle={pageTitle} />
        <main className="row">
            <div className="col-xs-12">
                {children}
            </div>
        </main>
        <Footer />
    </div>
)