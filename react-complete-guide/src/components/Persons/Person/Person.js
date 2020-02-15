import React from 'react';
// import styled from 'styled-components';
import './Person.css'
import Aux from '../../../hoc/Auxiliary'

// <div className='Person' style={style}>
        // <div className='Person'>

const person = (props) => {

    return (
        <React.Fragment>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} year old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </React.Fragment>
        
    )
}

export default person;