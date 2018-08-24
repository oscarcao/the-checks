import React from 'react'

import Layout from '../Components/Layout'
import DHControlInput from '../Components/DHControlInput'
import {QuestionWithOption} from '../Components/QuestionOption'

export default function VegetablesPage () {
    return (
        <Layout currentPage={20} numPages={32}>
            <QuestionWithOption
            question="How many serves of vegetables do you eat each day?"
            option="1 serve = &frac12; cup cooked or 1 cup salad vegetables"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="wide-content-wrapper">
                        <DHControlInput name="msov" iconStyle="square" icon="vegetables-0" label="None" />
                        <DHControlInput name="msov" iconStyle="square" icon="vegetables-1-2" label="1-2" />
                        <DHControlInput name="msov" iconStyle="square" icon="vegetables-3-4" label="3-4" />   
                        <DHControlInput name="msov" iconStyle="square" icon="vegetables-5-plus" label="5+" />   
                    </div> 
                </div>
            </div>
        </Layout>
    )
}
