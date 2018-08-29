import React from 'react'

import Layout from '../Components/Layout'
import DHControlInput from '../Components/DHControlInput'
import {QuestionWithOption} from '../Components/QuestionOption'

export default function FinancialPrioritiesPage () {
    return (
        <Layout currentPage={12} numPages={32}>
            <QuestionWithOption
            question="What are your financial priorities?"
            option="Pick as many as you like"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="mortgage" label="Pay mortgage/rent" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="save-holiday" label="Save for a holiday" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="retirement-savings" label=" Retirement savings" />   
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="close-friends" label="Help my adult children" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="investments" label="Investments" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="pay-debt" label="Pay off debt" />
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="ends-meet" label="Make ends meet" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="rainy-day" label="Save for a rainy day" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="provide-family" label="Provide for my family" />
                    </div>                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="narrow-content-wrapper">
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="enjoy-life" label="Have enough to enjoy life" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="medical-expenses" label="Health and medical expenses" />
                        <DHControlInput multiple name="fin" iconStyle="circle" icon="other" label="Other" />
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}
