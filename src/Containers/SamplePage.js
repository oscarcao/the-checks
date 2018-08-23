import React from 'react';

import Layout from '../Components/Layout'
import DHSlider from '../Components/DHSlider'
import DHControlInputList from '../Components/DHControlInputList'
import DHSmileySelector from '../Components/DHSmileySelector'

const sampleOptions = [
    {
        label: 'label1',
        name: 'name',
        value: 'value1',
    },
    {
        label: 'label2',
        name: 'name',
        value: 'value2',
    },
    {
        label: 'label3',
        name: 'name',
        value: 'value3',
    },
]

export default () => (
    <Layout currentPage={2} numPages={32}>
        <h3>This is a Slider:</h3>
        <DHSlider leftLabel="Left Label" rightLabel="Right Label" defaultValue={5} min={1} max={9} />
        <h3>This is a Control Input List set to use Checkboxes</h3>
        <DHControlInputList options={sampleOptions} type="checkbox" />
        <h3>This is a Control Input List set to use Radio Buttons</h3>
        <DHControlInputList options={sampleOptions} type="radio" minSelection={2} maxSelection={5} />
        <h3>This is a Smiley Selector</h3>
        <DHSmileySelector name="smiley1" question="Your Money" />
    </Layout>
)