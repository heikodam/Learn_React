import React from 'react';

import './Char.css';


const char = (props) => {

    const charList = props.value.split('')
    let char = null;

    char = (
        <div>
            {charList.map( (c, charIndex) => {
                
                return (
                    <div 
                        onClick={() => props.delete(charIndex)} 
                        key={charIndex} 
                        className='char'>
                        {c}
                    </div>
                )
            })}
        </div>
    )



    return (
        <div>{char}</div>
    )
}

export default char;