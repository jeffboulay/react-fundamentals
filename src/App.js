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

  update(e) {
    this.setState({ name: e.target.value })
  }
  render() {
    return (
      <div className="App">
        <form>
          <input type="name" ref='name' onChange={this.update.bind(this)} />
        </form>
        <Helloword name={this.state.name}></Helloword>
      </div>
    );
  }
}

export default App;
