import React from 'react';
import './Output.css'

const output = (props) => {
    return (
        <div className='output-div'>
            <p>
                As {props.name} once said: "A great man learns from his mistakes, but a wise man learns from other peoples mistakes"
            </p>
            <p>
                "Be the change in the world you want to see"
            </p>
        </div>
    )
}

export default output;