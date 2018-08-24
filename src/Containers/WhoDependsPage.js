import React from 'react'

import Layout from '../Components/Layout'
import DHControlInput from '../Components/DHControlInput'
import {QuestionWithOption} from '../Components/QuestionOption'

export default function WhoDependsPage () {
    return (
        <Layout currentPage={10} numPages={32}>
            <QuestionWithOption
            question="Who depends on you?"
            option="Pick as many as you like"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput name="wdoy" iconStyle="circle" icon="partner" label="Partner" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="children" label="Children" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="grandkids" label="Grandkids" />   
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput name="wdoy" iconStyle="circle" icon="close-friends" label="Close friends" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="siblings" label="Family members" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="parents" label="Parents" />
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput name="wdoy" iconStyle="circle" icon="pets" label="Pets" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="community" label="Community" />
                        <DHControlInput name="wdoy" iconStyle="circle" icon="not-available" label="None of these" />
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}
