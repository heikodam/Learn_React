import React, {Component} from 'react';

import Input from './Components/Input'
import Output from './Components/Output';
import Validation from './Components/Validation';
import Char from './Components/Char';

class App extends Component {
  state = {
    input: ""
  }

  inputChangeHandler = (event) => {
    this.setState({input: event.target.value})
  }

  deleteCharHandler = (charIndex) => {
    const valueList = this.state.input.split('');
    valueList.splice(charIndex, 1);
    const updateText = valueList.join('');
    this.setState({input: updateText});

  }
 
  render(){
    return (
      <div>
        <Input value={this.state.input} change={(event) => this.inputChangeHandler(event)}/>
        <Validation length={this.state.input.length}/>
        <Output value={this.state.input}/>
        <Char value={this.state.input} delete={(changeIndex) => this.deleteCharHandler(changeIndex)}/>
      </div>
    )
  }
}

export default App;
