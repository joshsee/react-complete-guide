import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28 },
      {name: 'Manu', age: 29 },
      {name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName = 'blabla') =>{
    console.log('Was Clicked!');
    console.log(newName)
    this.setState({persons: [
      {name: 'Josh', age: 33 },
      {name: newName, age: 45 },
      {name: 'Stephanie', age: 26 }
    ]})
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: 'Josh', age: 33 },
      {name: event.target.value, age: 45 },
      {name: 'Stephanie', age: 26 }
    ]})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherid',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              name={person.age}
              />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi my react app</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {person} 
        {/* {this.state.otherState} */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work'))
  }
}

export default App;
