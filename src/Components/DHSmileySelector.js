import React from 'react'

import DHControlInput from './DHControlInput'

export default ({ name, question }) => (
    <fieldset className="dh-smiley-selector">
        <h3 className="dh-smiley-selector__heading">{question}</h3>        
        <div className="dh-smiley-selector__smiley">
            <DHControlInput name={name} iconStyle="smiley" icon="very-sad" label="Not at all" />    
        </div>
        <div className="dh-smiley-selector__smiley">
            <DHControlInput name={name} iconStyle="smiley" icon="sad" label="Not very" />
        </div>
        <div className="dh-smiley-selector__smiley">
            <DHControlInput name={name} iconStyle="smiley" icon="neutral" label="Not sure" />
        </div>
        <div className="dh-smiley-selector__smiley">
            <DHControlInput name={name} iconStyle="smiley" icon="happy" label="Confident" />
        </div>
        <div className="dh-smiley-selector__smiley">
            <DHControlInput name={name} iconStyle="smiley" icon="very-happy" label="Really confident" />
        </div>       
    </fieldset>
)