import React from 'react'
import AUSelect from '@gov.au/select'

export default class DHQuantitySelector extends React.PureComponent {

    defaultOptions = [ 
        { value: '0', text: '0' }, 
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: '7' },
        { value: '8', text: '8' },
        { value: '9', text: '9' },
        { value: '10', text: '10' },
        { value: '10+', text: '10+' },
    ]

    render () {
        let { options, unit, icon, iconLabel, examples, ...otherProps } = this.props

        if (options === undefined)
            options = this.defaultOptions

        return (
            <div className="dh-quantity-selector">
                <div className={`dh-quantity-selector__icon icon-${icon}`}>
                    <span className="dh-quantity-selector__icon-label">{iconLabel}</span>
                </div>
                {examples && 
                    <div className="dh-quantity-selector__examples">
                        {examples.map((example, index) => <span key={`${icon}-example-${index}`} className="dh-quantity-selector__example">{example}</span>)}
                    </div>}
                <label className="dh-quantity-selector__label">
                    <span className="dh-quantity-selector__label-unit">{unit}</span>
                    <AUSelect options={options} {...otherProps} />
                </label>
            </div>            
        )
    }
}
