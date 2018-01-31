import React, { Component } from 'react';
import './App.css';
import Helloword from './HelloWorld';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'Jeff'
    }
  }
  render() {
    return (
      <div className="App">
        <Helloword name={this.state.name}></Helloword>
      </div>
    );
  }
}

export default App;
