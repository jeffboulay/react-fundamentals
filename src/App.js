import React, { Component } from 'react';
import './App.css';
import Helloword from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helloword name="Jeff"></Helloword>
      </div>
    );
  }
}

export default App;
