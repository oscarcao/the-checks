import React from 'react'

export default ({ narrative }) => (
    <div className="dh-narrative">
        {narrative.map((text, index) => <p key={`narrative-${index}`}>{text}</p>) }
    </div>
)