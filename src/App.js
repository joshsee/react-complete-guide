import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'asda536', name: 'Max', age: 28 },
      {id: 'gsdfs45', name: 'Manu', age: 29 },
      {id: 'dswe123', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName = 'blabla') =>{
  //   console.log('Was Clicked!');
  //   console.log(newName)
  //   this.setState({persons: [
  //     {name: 'Josh', age: 33 },
  //     {name: newName, age: 45 },
  //     {name: 'Stephanie', age: 26 }
  //   ]})
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Not mutate state, but use spread operator to distribute to this new person object
    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternativ method to assign it to an empty object
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherid',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )

      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <=2){
      classes.push('red');
    }
    if (this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi my react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {person} 
        {/* {this.state.otherState} */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work'))
  }
}

export default App;
