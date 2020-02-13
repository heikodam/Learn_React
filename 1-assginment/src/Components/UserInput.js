import React from 'react';

const userinput = (props) => {
    return (
        
        <input style={props.style} type="text" onChange={props.changed} value={props.name}/>
        
    )
}

export default userinput;