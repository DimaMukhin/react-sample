import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'dima', age: 24 },
      { name: 'ben', age: 18 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'dumba', age: 24 },
        { name: 'ben', age: 18 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'dumba', age: 240 },
        { name: event.target.value, age: 180 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1pm solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <button onClick={this.switchNameHandler} style={style}>Click Me</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}/>
      </div>
    );
  }
}

export default App;
