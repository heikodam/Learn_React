import React from 'react';


const validation = (props) => {
    let validText = "Text to short"; 

    if (props.length > 4) {
        validText = "Text long enough"
    }

    return (
        <div>
            <p>Min requirment 5 char</p>
            <p>{validText}</p>
        </div>
    )
}

export default validation;