import React, { Component } from 'react';
import './App.css';
import Helloword from './HelloWorld';
import CoffeeList from './CoffeeList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Jeff',
      coffee: '',
      list: ['weak coffee', 'super strong coffee']
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  addCoffee(e) {
    e.preventDefault();
    this.setState({
      list: this.state.list.concat(this.state.coffee)
    });
    this.setState({coffee:''})
  }
  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="name">Name:
            <input 
              name="name" 
              placeholder="Enter a name" 
              value={this.state.name}
              onChange={this.handleChange.bind(this)} 
            />
          </label>
        </form>
        <Helloword name={this.state.name} />
        <form onSubmit={this.addCoffee.bind(this)}>
          <label htmlFor="coffee">Name:
            <input 
              name="coffee" 
              placeholder="Enter a coffee"
              value={this.state.coffee}
              onChange={this.handleChange.bind(this)}
            />
            <button>Add Coffee</button>
          </label>
        </form>
        <CoffeeList list={this.state.list} />
      </div>
    );
  }
}

export default App;
