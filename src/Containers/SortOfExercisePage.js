import React from 'react'

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHQuantitySelector from '../Components/DHQuantitySelector'

export default function SortOfExercisePage () {
    return (
        <Layout currentPage={28} numPages={32}>
            <QuestionWithOption
            question="What sort of exercise do you do each week and how much?"
            option="Pick as many as you like"
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <div className="wide-content-wrapper">
                        <DHQuantitySelector icon="low-intensity" iconLabel="Low intensity" examples={['Casual walk','Tai Chi','Easy cycling','Light housework','Lawn bowls']} unit="HOURS" />
                        <DHQuantitySelector icon="moderate-intensity" iconLabel="Moderate intensity" examples={['Golf','Dancing','Cycling','Aqua aerobics','Social tennis']} unit="HOURS" />
                        <DHQuantitySelector icon="high-intensity" iconLabel="High intensity" examples={['Jogging/Running','Aerobics','Spin class/circuit class','Lap swimming','Team Sport']} unit="HOURS" />
                        <DHQuantitySelector icon="strengthening" iconLabel="Strengthening" examples={['Weights','Yoga','Manual labour','Carrying shopping','Body weight exercises']} unit="TIMES PER WEEK" />
                    </div> 
                </div>
            </div>
        </Layout>
    )
}
