import React, {Component} from 'react';
import './App.css';

import UserInput from './Components/UserInput'
import Output from './Components/Output'

class App extends Component {
  state = {
    username: [
      {name: 'Heiko'},
      {name: 'David'},
      {name: 'Noah'}
    ]
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: [
        {name: event.target.value},
        {name: 'David'},
        {name: 'Noah'}
      ]
    })
  }


  render() {

    const style = {
      border: '2px solid blue',
      font: 'inherit',
      padding: '10px',
      margin: '30px 34%'
    }

    return (
      <div className="App">
        <UserInput style={style} changed={this.usernameChangeHandler} name={this.state.username[0].name}/>
        <Output name={this.state.username[0].name}/>
        <Output name={this.state.username[1].name}/>
        <Output name={this.state.username[2].name}/>
      </div>
    );
  }
}

export default App;
