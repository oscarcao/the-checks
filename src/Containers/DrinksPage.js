import React from 'react'

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHQuantitySelector from '../Components/DHQuantitySelector'

export default function DrinksPage () {
    return (
        <Layout currentPage={26} numPages={32}>
            <QuestionWithOption
            question="On the days you drink, how much do you have?"
            option=""
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHQuantitySelector icon="wine" iconLabel="Wine" unit="GLASSES" />
                        <DHQuantitySelector icon="beer" iconLabel="Beer" unit="JUGS" />
                        <DHQuantitySelector icon="spirits" iconLabel="Spirits" unit="CUPS" />
                    </div> 
                </div>
            </div>
        </Layout>
    )
}
