import React from 'react'

import Layout from '../Components/Layout'
import {QuestionWithOption} from '../Components/QuestionOption'
import DHSmileySelector from '../Components/DHSmileySelector'

export default function HowConfidentYouFeelPage () {
    return (
        <Layout currentPage={26} numPages={32}>
            <QuestionWithOption
            question="Ok Lee, let’s see how confident you’re feeling about…"
            option=""
            >
            </QuestionWithOption>            
            <div className="row">
                <div className="col-lg-12">
                    <DHSmileySelector name="smiley1" question="Your Money" />
                    <DHSmileySelector name="smiley1" question="Your Health" />
                    <DHSmileySelector name="smiley1" question="Your Work" />
                    <DHSmileySelector name="smiley1" question="Your Social Life" />
                </div>
            </div>
        </Layout>
    )
}
