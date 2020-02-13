import React from 'react';

const input = (props) => {
    return (
        <div>
            <input type='text' onChange={props.change} value={props.value}/>
        </div>
    )
}

export default input;