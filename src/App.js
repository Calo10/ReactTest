import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state  = {
     persons: [
       { id: 1, name:"Carlos", age:30},
       { id: 2,name:"Naty", age:7},
       { id: 3,name:"Sofi", age:5}
     ],
     showPersons: false
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

     

    this.setState({persons: persons});
  }

  changeNameHandler = (newName) => {
    //console.log("clicked");
    this.setState({
      persons: [
        {name:newName, age:30},
        {name:"Naty", age:7},
        {name:"Sofi", age:500000}

      ]
    })
  }

  deletePersonHandler = (personIndex) =>{
    const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {

    const isShow = this.state.showPersons;
    this.setState({showPersons: !isShow});

  }

  render() {

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        paddind: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
        persons = (
          <div>
              {this.state.persons.map( (p, index) => {
                return <Person 
                  name={p.name} 
                  age={p.age} 
                  key={p.id}
                  changed={(event) => this.nameChangeHandler(event, p.id)}
                  click={() => this.deletePersonHandler(index)} />
              })}
        </div> 
        );

        style.backgroundColor = 'red';

    }

    let classes = [];
    if(this.state.persons.length < 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>hi Im Carlos</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle</button>
          {persons}
      </div>
    );
  }
}

export default App;
