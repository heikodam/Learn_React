import React from 'react';

import './Cockpit.css'

const cockpit = (props) => {
    
    let classes = [];
    if (props.persons.length <= 2) {
      classes.push('red');
    }
    if (props.persons.length <= 1){
      classes.push('bold');
    }


    const buttonClasses = ["button", "button-green"]
    if (props.showPersons) {
      buttonClasses[buttonClasses.length-1] = "button-red";
      
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button 
            className={buttonClasses.join(" ")}
            onClick={props.clicked}>Toggle Names</button>
        </div>
    );
};

export default cockpit;