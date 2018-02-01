import React, { Component } from 'react';
import './App.css';
import Helloword from './HelloWorld';
import CoffeeList from './CoffeeList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'Jeff',
      list: ['weak coffee', 'super strong coffee']
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
        <Helloword name={this.state.name} />
        <CoffeeList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
