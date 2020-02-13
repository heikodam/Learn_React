import React from 'react';

const output = (props) => {
    return (
        <div>
            <h3>Length of Your Text: </h3>
            <p>{props.value.length}</p>
        </div>
    )
}

export default output;