import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // this.state.persons[0].name = 'Sipo';
    this.setState({
      persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]})
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
      {name: 'Manu', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}
    ]})
  }
  

  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Sipopopo')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Anton')}
          changed={this.nameChangedHandler}
          > My Hobbies: Magic Tricks </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hey there'))
  }
}

export default App;
