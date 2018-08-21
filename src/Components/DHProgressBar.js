import React from 'react';

export default ({ currentValue, maxValue }) => (             
    <div className="dh-progressbar">
        <div className="dh-progressbar__filler" style={{ width: `${currentValue/maxValue * 100}%` }} />
    </div>
)