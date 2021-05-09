import React from 'react'

function Display({Name, price}) {
    return (
        <div>
                <h5>{Name}</h5>
                <p>{price}</p>
        </div>
    )
}

export default Display
