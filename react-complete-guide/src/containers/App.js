import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';


class App extends Component {
  
  state = {
    persons: [
      {id: 'lakwe', name: 'Max', age: 28},
      {id: 'argde', name: 'Manu', age: 29},
      {id: 'sfdgs', name: 'Stephanie', age: 26}
    ], 
    showPersons: false
  }


  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
          changed={this.nameChangedHandler}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          />
      )
       
    }
    return (
     
      <Aux>
        <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.showPersons}
        clicked={this.togglePersonsHandler}/>
        {persons}    
      </Aux>
      
    );
    }
}

export default withClass(App, "App");
