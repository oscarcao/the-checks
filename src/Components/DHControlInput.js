/***************************************************************************************************************************************************************
 *
 * dh-control-input function based on gov au's uikit implementation: https://github.com/govau/uikit/blob/master/packages/control-input/src/js/react.js
 *
 **************************************************************************************************************************************************************/

import React from 'react'

export const DHCheckbox = ({ label, className = '', ...attributeOptions }) => (
    <label className={`dh-control-input ${ className }`}>
        <input className="dh-control-input__input" type="checkbox" { ...attributeOptions } />
        <span className="dh-control-input__text">{ label }</span>
    </label>
)

export const DHRadio = ({ label, className = '', ...attributeOptions }) => (
    <label className={`dh-control-input ${ className }`}>
        <input className="dh-control-input__input" type="radio" { ...attributeOptions } />
        <span className="dh-control-input__text">{ label }</span>
    </label>
)

export default ({ multiple, icon = 'not-available', iconStyle = 'circle', ...controlProps }) => {
    const Type = multiple === true ? DHCheckbox : DHRadio
    
    return (<Type className={`icon-style-${iconStyle} icon-${icon}`} { ...controlProps } />)
}