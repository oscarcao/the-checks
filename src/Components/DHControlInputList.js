import React from 'react'
import PropTypes from 'prop-types'
import { AUcheckbox, AUradio } from '@gov.au/control-input'

export default class DHControlInputList extends React.PureComponent {

    state = {
        type: this.props.type,
        options: this.props.options.map(option => Object.assign({}, option, {
            isSelected: option.isSelected || false,
        })),
        numOfSelection: this.props.numOfSelection,
        minSelection: this.props.minSelection,
        maxSelection: this.props.maxSelection,
    }

    handleChange = (selectedIndex) => {
        this.setState( prevState => {
            const newOptions = prevState.options.map((option, index) => {
                if (prevState.type !== 'checkbox') {                
                    const selected = selectedIndex !== index ? false : true                   
    
                    return {
                        ...option,
                        isSelected: selected
                    }
                }
    
                if(selectedIndex === index) {
                    return {
                        ...option,
                        isSelected: option.isSelected ? false : true
                    }
                }
    
                return option
            })

            return { options: newOptions }
        })
    }

    render() {
       const { options, type } = this.state

        if (!options)
            return null

        const Type = type === 'checkbox' ? AUcheckbox : AUradio;

        return (
            <fieldset className="dh-control-input-list">
                { options.map((option, index) => { 
                    const {isSelected, ...controlInputProps} = option

                    return ( 
                        <div className={`dh-control-input-list__option ${isSelected ? 'selected' : ''}`} key={option.name + index}>
                            <Type {...controlInputProps} onChange={() => this.handleChange(index)} alt={true} />
                        </div> 
                    )
                })}
            </fieldset>
        )
    }
}

DHControlInputList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string
    })),
    type: PropTypes.string,
    numOfSelection: PropTypes.number,
    minSelection: PropTypes.number,
    maxSelection: PropTypes.number,
}

DHControlInputList.defaultProps = {
    type: 'checkbox',
    numOfSelection: 0,
    minSelection: 1,
    maxSelection: -1,
}