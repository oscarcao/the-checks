import React from 'react'

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHSlider from '../Components/DHSlider'

export default function VegetablesPage () {
    return (
        <Layout currentPage={26} numPages={32}>
            <QuestionWithOption
            question="How are you feeling today?"
            option="Move the sliders to let us know"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <DHSlider leftLabel="Exhausted" rightLabel="Full of energy" defaultValue={5} min={1} max={9} />
                    <DHSlider leftLabel="Stressed" rightLabel="Calm" defaultValue={5} min={1} max={9} />
                    <DHSlider leftLabel="Not sleeping well" rightLabel="Well rested" defaultValue={5} min={1} max={9} />
                    <DHSlider leftLabel="I'm so unfit" rightLabel="Fit and healthy" defaultValue={5} min={1} max={9} />
                    <DHSlider leftLabel="A bit down" rightLabel="Cheerful" defaultValue={5} min={1} max={9} />
                </div>
            </div>
        </Layout>
    )
}
